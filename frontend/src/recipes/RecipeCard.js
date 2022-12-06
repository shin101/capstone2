import React from "react";

function RecipeCard({ food_title, image, servings, instructions }){
  return (
    <div>
      <p>{food_title}</p>
      <img src={image}></img>
    </div>
  )
}

export default RecipeCard;