// src/components/Navbar.js
import React from 'react';

const Navbar = ({ onFormChange }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <button onClick={() => onFormChange('login')} className="navbar-button">
            Iniciar Sesión
          </button>
        </li>
        <li>
          <button onClick={() => onFormChange('register')} className="navbar-button">
            Registrarse
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
