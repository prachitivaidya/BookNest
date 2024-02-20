import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminBook from './AdminBook';
import axios from 'axios'; // Import Axios
import './AdminBookPage.css';

const AdminBookPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books data from your backend API
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      // Make a GET request to your backend API endpoint that retrieves book data
      const response = await axios.get('http://localhost:8080/api/ebooks');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (bookId) => {
    // Logic to handle delete action
    try {
      await axios.delete(`http://localhost:8080/api/ebooks/${bookId}`);
      // After successful deletion, fetch the updated list of books
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="admin-book-page">
      <h1>Admin: Manage Books</h1>
      <Link to="/add-book" className="add-book-link">Add Book</Link> {/* Link to the add book form */}
      <div className="admin-books-container">
        {books.map(book => (
          <AdminBook 
            key={book.bookId} 
            book={book} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default AdminBookPage;
