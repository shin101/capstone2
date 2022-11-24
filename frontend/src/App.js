import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './routes/NavBar';
import NavRoutes from './routes/NavRoutes';
import React, {useState} from "react";

function App() {
  const [mealData, setMealData] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <NavRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
