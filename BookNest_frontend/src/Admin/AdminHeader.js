// AdminHeader.js

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

function AdminHeader() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="company-name">Booknest</Link>
      </div>
      <div className="nav-right">
        <ul>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/subscribedUsers" className="nav-link">Subscribed Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/genres" className="nav-link">Genres</Link>
          </li>
          <li className="nav-item">
            <Link to="/plans" className="nav-link">Plans</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default AdminHeader;
