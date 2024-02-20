// Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';

function Header() {
  
    // Render default header for other pages
    return (
      <header>
        <nav>
          <div className="nav-left">
            <Link to="/" className="company-name">Booknest</Link>
          </div>
          <div className="nav-right">
            <ul>
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/books" className="nav-link">Browse Books</Link>
              </li>
              <li className="nav-item">
                <Link to="/subscriptions" className="nav-link">Subscriptions</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }


export default Header;
