import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <nav className="main-navbar">
        <ul className="main-navLinks">
          <li>
            <Link to="/Merch">
              <button className="main-navButton">Merch</button>
            </Link>
          </li>
          <li>
            <Link to="/Register">
              <button className="main-navButton">Register</button>
            </Link>
          </li>
        </ul>
        <Link to="/Login">
          <button className="main-loginButton">Log In</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
