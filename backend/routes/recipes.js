"use strict";
// const jsonschema = require("jsonschema");

const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Recipe = require('../models/recipe.js')

const router = express.Router();



// get all recipes. Must be logged in
router.get("/", ensureLoggedIn, async function (req, res, next){
  const q = req.query;

  try {
    const recipes = await Recipe.findAll(q);
    return res.json({ recipes });
  } catch (e) {
    return next(e);
  }
});

// get specific food. Must be logged in
router.get("/:name", ensureLoggedIn, async function (req, res, next){
  try {
    const recipe = await Recipe.get(req.params.name);
    return res.json({ recipe });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;