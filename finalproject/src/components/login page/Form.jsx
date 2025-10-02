import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../../api/LoginCRUD';

function Form() {
  const [credentials, setCredentials] = useState({
    Username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const isValid = await validateUser(credentials.Username, credentials.password);
      if (isValid) {
        alert('Login successful!');
        navigate('/Main') 
      } else {
        alert('The data you provided is incorrect or does not exist. Please verify and try again.');
      }
    } catch (error) {
      console.error('Oops! It seems there was a problem:', error);
    }
  };

  const goToRegister = () => {
    navigate('/Register');  
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="Username">Username</label>
      <input
        type="text"
        name="Username"
        placeholder="Your username goes here"
        value={credentials.Username}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Your password goes here"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <button className="loginBtn" type="submit">Login</button>

      <label htmlFor="registerPageBtn">Wanna register?</label>
      <button className="registerPageBtn" type="button" onClick={goToRegister}>
        Go to Register
      </button>
    </form>
  );
}

export default Form;
