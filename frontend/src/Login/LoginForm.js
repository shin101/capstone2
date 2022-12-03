import React, { useState } from 'react';


function LoginForm({ login }){
  const [formData, setFormData] = useState({}); // not sure if to use obj, or what
  const handleChange = (e) => {
    const {name, value} = e.target;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <button>Log In</button>
      </form>

    </div>
  )

}

export default LoginForm;


