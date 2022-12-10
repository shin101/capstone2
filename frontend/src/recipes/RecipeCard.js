import React from "react";
import { NavLink } from "react-router-dom";
import './RecipeCard.css'

function RecipeCard({ id, food_title, image }){
  return (
    <div className="card">
        <NavLink to={`/recipes/${id}`}>
          <p className="food_title">{food_title}</p>
          <img src={image} alt={food_title}></img>
        </NavLink>
    </div>
  )
}

export default RecipeCard;