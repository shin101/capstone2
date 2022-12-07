"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

// /** Related functions for companies. */

class Recipe {
  /** Create a recipe (from data), update db, return new recipe data.
   *
   * Throws BadRequestError if recipe already in database.
   * */

  // static async create({ food_title, image, servings, instructions }) {
  //   const duplicateCheck = await db.query(
  //         `SELECT handle
  //          FROM companies
  //          WHERE handle = $1`,
  //       [handle]);

  //   if (duplicateCheck.rows[0])
  //     throw new BadRequestError(`Duplicate recipe: ${handle}`);

  //   const result = await db.query(
  //         `INSERT INTO companies
  //          (handle, name, description, num_employees, logo_url)
  //          VALUES ($1, $2, $3, $4, $5)
  //          RETURNING handle, name, description, num_employees AS "numEmployees", logo_url AS "logoUrl"`,
  //       [
  //         handle,
  //         name,
  //         description,
  //         numEmployees,
  //         logoUrl,
  //       ],
  //   );
  //   const company = result.rows[0];

  //   return company;
  // }

  /** Find all recipes (optional filter on searchFilters).
   * */

  static async findAll(searchFilters = {}) {
    let query = `SELECT id,
                        food_title,
                        image,
                        servings,
                        instructions
                 FROM recipes`;
    let queryValues = [];

    const { searchTerm } = searchFilters;

    if (searchTerm) {
      query += (' WHERE food_title ILIKE $1');
      queryValues.push(`%${searchTerm}%`);
    }

    // Finalize query and return results
    query += " ORDER BY food_title";
    const recipesRes = await db.query(query, queryValues);
    return recipesRes.rows;
  }

  /** Given a recipe id, return data about recipe.
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const res = await db.query(
          `SELECT id,
                  food_title,
                  image,
                  servings,
                  instructions
          FROM recipes
          WHERE id = $1`,
        [id]);

    const recipe = res.rows[0];
    if (!recipe) throw new NotFoundError(`No recipe ID: ${id}`);

    return recipe;
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  // static async update(handle, data) {
  //   const { setCols, values } = sqlForPartialUpdate(
  //       data,
  //       {
  //         numEmployees: "num_employees",
  //         logoUrl: "logo_url",
  //       });
  //   const handleVarIdx = "$" + (values.length + 1);

  //   const querySql = `UPDATE companies 
  //                     SET ${setCols} 
  //                     WHERE handle = ${handleVarIdx} 
  //                     RETURNING handle, 
  //                               name, 
  //                               description, 
  //                               num_employees AS "numEmployees", 
  //                               logo_url AS "logoUrl"`;
  //   const result = await db.query(querySql, [...values, handle]);
  //   const company = result.rows[0];

  //   if (!company) throw new NotFoundError(`No company: ${handle}`);

  //   return company;
  // }

  // /** Delete given company from database; returns undefined.
  //  *
  //  * Throws NotFoundError if company not found.
  //  **/

  // static async remove(handle) {
  //   const result = await db.query(
  //         `DELETE
  //          FROM companies
  //          WHERE handle = $1
  //          RETURNING handle`,
  //       [handle]);
  //   const company = result.rows[0];

  //   if (!company) throw new NotFoundError(`No company: ${handle}`);
  // }
}


module.exports = Recipe;
