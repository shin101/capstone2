import React, { useContext }from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Login/RegisterForm";
import RecipeList from "../recipes/RecipeList"
import RecipeDetail from "../recipes/RecipeDetail"
import UserContext from "../Login/UserContext";

function NavRoutes(){
  const { recipes } = useContext(UserContext);

  return (
    <div>
      <Routes>
        <Route exact path="/recipes" element={<RecipeList recipes={recipes}/>} />
        <Route exact path="/recipes/:id" element={<RecipeDetail />} />
        <Route exact path="/register" element={<RegisterForm />}/>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default NavRoutes;