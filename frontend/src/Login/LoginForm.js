import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from './UserContext';
import Button from 'react-bootstrap/Button';
import './Form.css';


function LoginForm(){
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  }); 
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      // ...formData spreads both username & password
      ...formData,
      [name]:value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    navigate('/');
  }
  
  return(
    <div>
      <h4>Welcome Back.</h4>
      <form onSubmit={handleSubmit}>
          <div>
            <input
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              />
          </div>
          <div>
            <input
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            />
          </div>
          <Button variant="primary" type="submit">Login</Button>
      </form>
      <p>Not a member? <NavLink to="/register">Sign Up</NavLink></p>
    </div>
  )

}

export default LoginForm;


