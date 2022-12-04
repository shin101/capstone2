import React, { useContext } from "react";
import "./Homepage.css"
import UserContext from "../Login/UserContext";
import RegisterForm from "../Login/RegisterForm";

function Homepage() {
  const { currUser } = useContext(UserContext);

  function loggedInHomepage(){
    return (
      <div>
        you are logged in
      </div>
    )
  }

  function loggedOutHomepage(){
    return (
      <div className="Homepage">
        Sign up now
        <RegisterForm /> 


        <h2 className="text-center">Get your next dinner idea.</h2>
       
      </div>
    )
  }

  return currUser? loggedInHomepage() : loggedOutHomepage();
}

export default Homepage;