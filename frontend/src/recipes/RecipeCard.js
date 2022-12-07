import React from "react";
import { NavLink } from "react-router-dom";

function RecipeCard({ id, food_title, image }){
  return (
    <div>
      <NavLink to={`/recipes/${id}`}>
        <p>{food_title}</p>
        <img src={image} alt={food_title}></img>
      </NavLink>
    </div>
  )
}

export default RecipeCard;