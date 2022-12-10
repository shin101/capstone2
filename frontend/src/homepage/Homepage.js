import React, { useContext } from "react";
import "./Homepage.css"
import UserContext from "../Login/UserContext";
import RegisterForm from "../Login/RegisterForm";
import RecipeList from "../recipes/RecipeList";


function Homepage() {
  const { currUser, recipes } = useContext(UserContext);

  return currUser ? 
    (<div>
      <h2 className='Title LoggedIn'>Welcome back, {currUser.username}</h2>
      <h4>Saved Recipes</h4>
      {currUser.likedRecipes.length 
        ? <RecipeList recipes={recipes.filter(r => currUser.likedRecipes.includes(r.id))} /> 
        : <p>You have no saved recipes</p>}
    </div>) : (
    <div>
      <h2 className="Title">Get your next dinner idea.</h2>
      <h3>Sign up today</h3>
      <RegisterForm />
    </div>
  );
}

export default Homepage;