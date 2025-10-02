import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../../api/LoginCRUD';


function Form() {
  const [credentials, setCredentials] = useState({
    Username: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const isValid = await validateUser(credentials.Username, credentials.password);
      if (isValid) {
        setMessage('Inicio de sesión exitoso');
        setShowMessage(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setMessage('Usuario o contraseña incorrectos');
        setShowMessage(true);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMessage('Ocurrió un error. Intenta de nuevo.');
      setShowMessage(true);
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

      {showMessage && <div className="popup-message">{message}</div>}
    </form>
  );
}

export default Form;
