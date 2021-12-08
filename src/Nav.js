import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const line = { color: 'rgb(0, 132, 255)' };
  return (
    <nav>
      <ul className="nav-link">
        <Link style={line} to="/home">
          <li>Home</li>
        </Link>
        <div className="line" />
        <Link style={line} to="/calculate">
          <li>Calculator</li>
        </Link>
        <div className="line" />
        <Link style={line} to="/quote">
          <li>Quotes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
