import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  console.debug("RecipeList");

  return (
    <div className="RecipeList">
      {recipes.map(r=>(
        <RecipeCard key={r.id} {...r} /> 
      ))}
    </div>
  );
}

export default RecipeList;
