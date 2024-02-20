import React from 'react';
import { Link } from 'react-router-dom';
import './UserHeader.css';

function UserHeader() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="company-name">Booknest</Link>
      </div>
      <div className="nav-right">
        <ul>
          <li className="nav-item">
            <Link to="/userbook" className="nav-link">Browse Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/usersubscription" className="nav-link">Subscription</Link>
          </li>
          <li className="nav-item">
            <Link to="/userinfo" className="nav-link">User Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default UserHeader;
