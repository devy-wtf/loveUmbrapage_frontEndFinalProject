import React from 'react'
import { Link } from 'react-router-dom';
function Header() {   





  return (
    <header className='header'>
        <nav className='navbar'>
            <ul className='navLinks'>
                <li>
                Shows n' tours
                </li>

                <li>
                 Albums
                </li>

                 <li>
                  Merch
                </li>
            </ul>
          <button className='loginButton'>Log In</button>
        </nav>
    </header>
  )
}

export default Header