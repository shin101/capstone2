import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../Login/LoginForm";
import RecipeList from "../recipes/RecipeList"

function NavRoutes({ login }){

  return (
    <div>
      <Routes>
        <Route exact path="/recipes" element={<RecipeList />} />
        <Route exact path="/signup" />
        <Route exact path="/login" element={<LoginForm login={login} />} />
        <Route exact path="*" element={<Homepage />} />

      </Routes>
    </div>
  );
}

export default NavRoutes;