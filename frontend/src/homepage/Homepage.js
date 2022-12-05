import React, { useContext } from "react";
import "./Homepage.css"
import UserContext from "../Login/UserContext";
import RegisterForm from "../Login/RegisterForm";

function Homepage() {
  const { currUser } = useContext(UserContext);

  function loggedInHomepage(){
    return (
      <div class='LoggedIn'>
        <h2>Welcome back, *USERNAME*</h2>
      </div>
    )
  }

  function loggedOutHomepage(){
    return (
      <div className="Homepage">
        <h2 className="text-center">Get your next dinner idea.</h2>
        <h3>Sign up today</h3>
        <RegisterForm />

      
      </div>
    )
  }

  return currUser? loggedInHomepage() : loggedOutHomepage();
}

export default Homepage;