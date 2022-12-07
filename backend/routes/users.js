"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const userNewSchema = require('../schemas/userNew.json');
const { BadRequestError } = require("../expressError");
const { createToken } = require("../helpers/tokens");
const User = require('../models/user.js')

const router = express.Router();

// Below is not the registration endpoint, it is for admin to add new userNewSchema. Authorization required : admin

router.post("/", ensureLoggedIn, async function (req, res, next){
  try {
    // compare req.body with schema
    const validator = jsonschema.validate(req.body, userNewSchema);
    // throw error if not valid
    if(!validator.valid){
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    // if valid then assign
    const user = await User.register(req.body);
    const token = createToken(user);
    return res.status(201).json({ user, token })
  } catch (e) {
    return next(e);
  }
});

// get all users. Admin auth required
router.get("/", ensureLoggedIn, async function (req, res, next){
  try {
    const users = await User.findAll();
    return res.json({ users });
  } catch (e) {
    return next(e);
  }
});

// get specific user. Must have admin or correct user authorization
router.get("/:username", ensureLoggedIn, async function (req, res, next){
  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (e) {
    return next(e);
  }
});

// get specific user. Must have admin or correct user authorization
router.post("/:username/recipes/:id", ensureLoggedIn, async function (req, res, next){
  try {
    const result = await User.likeRecipe(req.params.username, req.params.id);
    return res.json({ result });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;