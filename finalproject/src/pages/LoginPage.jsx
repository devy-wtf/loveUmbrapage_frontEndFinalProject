import React from 'react';
import Title from '../components/login page/Title';
import Form from '../components/login page/Form';
import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="background-image" />
      <div className="login-container">
        <Title />
        <Form />
      </div>
    </div>
  );
}

export default LoginPage;
