import React from "react";

function RecipeCard({ food_title, image, servings, instructions }){
  return (
    <div>
      <a href="/">
        <p>{food_title}</p>
        <img src={image} alt={food_title}></img>
      </a>
      
    </div>
  )
}

export default RecipeCard;