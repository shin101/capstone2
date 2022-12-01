import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './routes/NavBar';
import NavRoutes from './routes/NavRoutes';
import React, {useState} from "react";
import RecipeApi from './api/api';

function App() {
  const [token, setToken] = useState(null);
  const [mealData, setMealData] = useState(null);

  async function login(loginData){
    try {
      const token = await RecipeApi.login(loginData);
      setToken(token);
    } catch (e){
      return (e);
    }
  }


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <NavRoutes login={login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
