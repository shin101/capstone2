import 'bootstrap/dist/css/bootstrap.min.css';
import './routes/NavBar.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './routes/NavBar';
import NavRoutes from './routes/NavRoutes';
import React, {useEffect, useState} from "react";
import RecipeApi from './api/api';
import jwt from "jsonwebtoken";
import UserContext from './Login/UserContext';
import useLocalStorage from './hooks/localStorage';

const CURRENT_USER_KEY = 'current-user';
const TOKEN_KEY = 'token';

function App() {
  const [currUser, setCurrUser] = useLocalStorage(null, CURRENT_USER_KEY);
  const [token, setToken] = useLocalStorage(null, TOKEN_KEY);
  const [recipes, setRecipes] = useState([]);

  // triggered by state change of token 
  // call backend to get information on the newly-logged-in user and store it in the currentUser state
  useEffect(() => {
    async function loadCurrentUser() {
      // jwt.decode(token) returns the payload from the token (works without secret key.tokens are signed, not enciphered)
      const payload = jwt.decode(token);
      RecipeApi.token = token;
      const currUser = await RecipeApi.getUser(payload.username);
      setCurrUser(currUser);
      search();
    }
    if (token){
      loadCurrentUser();
    }
  }, [setCurrUser, token]);

  // search bar in the nav bar
  async function search(searchTerm){
    setRecipes(await RecipeApi.getAllRecipes(searchTerm));
  }

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

  function logOut(){
    setCurrUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currUser, register, login, search, recipes, setCurrUser, setRecipes }}>
          <NavBar logOut={logOut} />
          <NavRoutes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
