import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';


function RegisterForm(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const { register } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      // name is computed property
      ...formData, [name]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    navigate('/login');
  }

  return(
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input 
            name="username" 
            placeholder="username"
            onChange={handleChange}
            value={formData.username}
            />
          </div>
          <div>
            <input 
            name="password" 
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
            />
          </div>
          <div>
            <input 
            name="firstName" 
            placeholder="first name"
            onChange={handleChange}
            value={formData.firstName}
            />
          </div>
          <div>
            <input 
            name="lastName" 
            placeholder="last name"
            onChange={handleChange}
            value={formData.lastName}
            />
          </div>
          <div>
            <input 
            name="email" 
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
            />
          </div>

        <button>Sign Up</button>
      </form>
    </div>
  )

}

export default RegisterForm;