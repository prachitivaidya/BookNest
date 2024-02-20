// src/Book/Book.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Book.css';

const Book = ({ name, author, coverImage, description }) => {
  return (
    <Link to="/signin" className="book-card"> {/* Use Link component */}
      <img className="book-cover" src={coverImage} alt={name} />
      <div className="book-details">
        <h2 className="book-title">{name}</h2>
        <p className="book-author">Author: {author}</p>
        <p className="book-description">{description}</p>
      </div>
    </Link>
  );
};

export default Book;
