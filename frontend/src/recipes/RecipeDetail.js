import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RecipeApi from '../api/api';
import UserContext from '../Login/UserContext';
import './RecipeDetail.css'

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
          <h2 className="food-title">{recipe.food_title}</h2>
          <br></br>
          
          <div className="detail">
          <p>Servings: {recipe.servings}</p>
            <p>Instruction:</p>
              <ol>
                {recipe.instructions.split("#").map(x => <li key={x}>{x}</li>)}
              </ol>
      </div>
        </>
      : null}

      <br></br>
      <br></br>
      <br></br>

      <button id="save-button" onClick={likeRecipe}>{liked ? 'Unsave' : 'Save'}</button> 
    </div>

  );
}

export default RecipeDetail;