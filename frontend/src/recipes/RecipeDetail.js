import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RecipeApi from '../api/api';

function RecipeDetail(){
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getDetail(){
      setRecipe(await RecipeApi.getRecipe(id)); 
    }
    if(id) getDetail();
  }, [id]);

  return (
    <div> 
      <h2>{recipe? recipe.food_title : ""}</h2>
      <p>Servings: {recipe? recipe.servings : ""}</p>
      <p>Instruction : {recipe? recipe.instructions : ""}</p>

    </div>
  );
}

export default RecipeDetail;