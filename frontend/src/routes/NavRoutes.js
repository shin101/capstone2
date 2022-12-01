import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../Login/LoginForm";

function NavRoutes({ login }){

  return (
    <div>
      <Routes>
        <Route exact path="/recipes" />
        <Route exact path="/signup" />
        <Route exact path="/login" element={<LoginForm login={login} />} />
        <Route exact path="*" element={<Homepage />} />

      </Routes>
    </div>
  );
}

export default NavRoutes;