import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import UserContext from '../Login/UserContext';

function RecipeList() {
  console.debug("RecipeList");
  const { recipes } = useContext(UserContext);

  return (
    <div className="RecipeList">
      {recipes.map(r=>(
        <RecipeCard key={r.id} {...r} /> 
      ))}
    </div>
  );
}

export default RecipeList;
