import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RecipeApi from '../api/api';
import UserContext from '../Login/UserContext';

function RecipeDetail(){
  const { id } = useParams();
  const { currUser, setCurrUser } = useContext(UserContext);
  const [recipe, setRecipe] = useState(null);
  const [liked, setLiked] = useState(Boolean(currUser.likedRecipes.find(x => x === id)));

  useEffect(() => {
    async function getDetail(){
      setRecipe(await RecipeApi.getRecipe(id)); 
    }
    if(id) getDetail();
  }, [id]);

  async function likeRecipe() {
    const result = await RecipeApi.likeRecipe(currUser.username, id);
    setLiked(x => !x);
    if (result.liked) {
      setCurrUser(user => ({
        ...user,
        likedRecipes: [...user.likedRecipes, id], 
      }));
    } else {
      setCurrUser(user => ({
        ...user,
        likedRecipes: user.likedRecipes.filter(r => r !== id), 
      }));
    }
  }

  return (
    <div> 
      {recipe ? 
        <>
          <h2>{recipe.food_title}</h2>
          <p>Servings: {recipe.servings}</p>
          <ol>
            Instruction:
            {recipe.instructions.split("#").map(x => <li key={x}>{x}</li>)}
          </ol>
        </>
      : null}
      <button id="save-button" onClick={likeRecipe}>{liked ? 'Unsave' : 'Save'}</button> 
    </div>
  );
}

export default RecipeDetail;