import React from 'react';
import Title from '../components/register page/Title';
import RegisForm from '../components/register page/RegisForm';
import '../styles/RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="regis-background" />
      <div className="register-container">
        <Title />
        <RegisForm />
      </div>
    </div>
  );
}

export default RegisterPage;
