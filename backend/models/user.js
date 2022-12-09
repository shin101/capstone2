"use strict";

const db = require("../db");
const bcrypt = require("bcryptjs");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {
  static async authenticate(username, password) {
    // try to find the user first
    const result = await db.query(
          `SELECT username,
                  password,
                  first_name AS "firstName",
                  last_name AS "lastName",
                  email,
                  is_admin AS "isAdmin"
           FROM users
           WHERE username = $1`,
        [username],
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }

  /** Register user with data.
   *
   * Returns { username, firstName, lastName, email, isAdmin }
   *
   * Throws BadRequestError on duplicates.
   **/

  static async register(
      { username, password, firstName, lastName, email, isAdmin }) {
    const duplicateCheck = await db.query(
          `SELECT username
           FROM users
           WHERE username = $1`,
        [username],
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
          `INSERT INTO users
           (username,
            password,
            first_name,
            last_name,
            email,
            is_admin)
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING username, first_name AS "firstName", last_name AS "lastName", email, is_admin AS "isAdmin"`,
        [
          username,
          hashedPassword,
          firstName,
          lastName,
          email,
          isAdmin,
        ],
    );

    const user = result.rows[0];

    return user;
  }

  // Find all users
  static async findAll() {
    const result = await db.query(
      `SELECT username,
              first_name AS "firstName",
              last_name AS "lastName",
              email,
              is_admin AS "isAdmin"
      FROM users
      ORDER BY username`,
    );
    return result.rows;
  }

  // Find one specific
  static async get(username) {
    const result = await db.query(
      `SELECT username,
              first_name AS "firstName",
              last_name AS "lastName",
              email,
              is_admin AS "isAdmin"
      FROM users
      WHERE username = $1`,
      [username],
    );
    
    const user = result.rows[0];

    if(!user) throw new NotFoundError(`No such user: ${username}`);
    
    const recipeResult = await db.query(
      `SELECT recipe_id 
       FROM users_recipes
       WHERE username = $1`,
       [username],
    );

    user.likedRecipes = recipeResult.rows.map(x => x.recipe_id);
    
    return user;
  }

  static async likeRecipe(username, recipeId) {
    const result = await db.query(
      `SELECT count(*)
      FROM users_recipes
      WHERE username = $1 AND recipe_id = $2`,
      [username, recipeId],
    );

    if (+result.rows[0].count) {
      await db.query(
        `DELETE FROM users_recipes
        WHERE username = $1 AND recipe_id = $2`,
        [username, recipeId],
      );

      return { liked: false };
    } else {
      await db.query(
        `INSERT INTO users_recipes (username, recipe_id, liked_at)
        VALUES ($1, $2, NOW())`,
        [username, recipeId],
      );

      return { liked: true };
    }
  }
}

module.exports = User;