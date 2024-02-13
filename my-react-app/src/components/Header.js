import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <Link to="/" className="company-name">Booknest</Link>
        </div>
        <div className="nav-right">
          <ul>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/books">Browse Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/subscriptions">Subscriptions</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
