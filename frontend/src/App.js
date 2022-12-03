import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './routes/NavBar';
import NavRoutes from './routes/NavRoutes';
import React, {useEffect, useState} from "react";
import RecipeApi from './api/api';
import jwt from "jsonwebtoken";
import useLocalStorage from './hooks/localStorage';

function App() {
  const [token, setToken] = useState(null);
  const [mealData, setMealData] = useState(null);
  const [currUser, setCurrUser] = useLocalStorage(null);

  // triggered by state change of token 
  // call backend to get information on the newly-logged-in user and store it in the currentUser state
  useEffect(() => {
    async function loadCurrentUser() {
      // jwt.decode(token) returns the payload from the token (works without secret key.tokens are signed, not enciphered)
      const payload = jwt.decode(token);
      RecipeApi.token = token;
      const currUser = await RecipeApi.getUser(payload.username);

      setCurrUser(currUser);
    }

    if (token){
      loadCurrentUser();
    }

  }, [setCurrUser, token]);


  async function login(loginData){
    try {
      const token = await RecipeApi.login(loginData);
      setToken(token);
    } catch (e){
      return (e);
    }
  }

  async function register(registerData){
    try {
      const token = await RecipeApi.register(registerData);
      setToken(token);
    } catch (e){
      return (e);
    }
  }


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <NavRoutes register={register} login={login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
