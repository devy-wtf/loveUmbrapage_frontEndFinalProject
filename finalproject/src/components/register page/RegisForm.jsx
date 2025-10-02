import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../api/RegisCRUD';

function RegisForm() {
  const [formData, setFormData] = useState({
    regisUsername: '',
    createPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert('Usuario registrado exitosamente');
      setFormData({ regisUsername: '', createPassword: '' });

      
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="regisUsername">Create your Username</label>
      <input
        type="text"
        name="regisUsername"
        placeholder="Create your new Username here"
        value={formData.regisUsername}
        onChange={handleChange}
        required
      />
      <label htmlFor="createPassword">Create your Password</label>
      <input
        type="password"
        name="createPassword"
        placeholder="Type your secret password here"
        value={formData.createPassword}
        onChange={handleChange}
        required
      />
      <button className="RegisBtn" type="submit">Register</button>
    </form>
  );
}

export default RegisForm;
