import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Login/RegisterForm";
import RecipeList from "../recipes/RecipeList"

function NavRoutes({ login, register }){

  return (
    <div>
      <Routes>
        <Route exact path="/recipes" element={<RecipeList />} />

        <Route exact path="/register" element={<RegisterForm register={register} />}/>

        <Route exact path="/login" element={<LoginForm login={login} />} />
        <Route exact path="*" element={<Homepage />} />

      </Routes>
    </div>
  );
}

export default NavRoutes;