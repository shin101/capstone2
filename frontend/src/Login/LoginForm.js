import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import UserContext from './UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

{/* 
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

    </Form> */}
      <p>Not a member? <a href="/register">Sign Up</a></p>
    </div>
  )

}

export default LoginForm;


