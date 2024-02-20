import React from 'react';
import './AdminBook.css';
import BookNest from './BookNest.png';
const AdminBook = ({ book, onDelete }) => {
  const { name, imageUrl } = book;

  const handleDeleteClick = () => {
    // Call the onDelete function passed as a prop with the book ID
    onDelete(book.bookId);
  };

  return (
    <div className="admin-book">
      <img src={BookNest} alt={name} />
      <h2>{name}</h2>
      {/* Add delete button */}
      <div className="admin-book-buttons">
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default AdminBook;
