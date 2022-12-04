import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import UserContext from './UserContext';


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
    navigate('/recipes');
  }
  
  return(
    <div>
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
        <button>Log In</button>
      </form>
    </div>
  )

}

export default LoginForm;


