import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css'; 

const AppHeader = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/RegistrationPage">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
