import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navLinks">
          <li>
            <Link to="/Merch">
              <button className="navButton">Merch</button>
            </Link>
          </li>
          <li>
            <Link to="/Register">
              <button className="navButton">Register</button>
            </Link>
          </li>
        </ul>
        <Link to="/Login">
          <button className="loginButton">Log In</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
