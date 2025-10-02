import React from 'react';
import Header from '../components/main page/Header';
import Titles from '../components/main page/Titles';
import '../styles/MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-background" />
      <Header />
      <div className="main-content">
        <Titles />
      </div>
    </div>
  );
}

export default MainPage;
