import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './BookPage.css';
import Header from '../components/Header';
import Book from './Book'; // Import Book component
import BookNest from "../components/Assets/BookNest.png";

const BooksPage = () => {
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
      toast.error('Error fetching books. Please try again.'); // Notify user of error
    }
  };

  useEffect(() => {
    // Notify user of successful loading if books array was initially empty
    if (books.length > 0) {
      toast.success('Books loaded successfully!');
    }
  }, [books]); // Trigger useEffect when books array changes

  return (
    <>
      <Header/>
      <div className="books-page">
        <h1>Available Books</h1>
        <div className="books-container">
          {books.map(book => (
            <div key={book.bookId} className="book-container">
              <div className="book-info">
                {/* Pass props to the Book component */}
                <Book
                  name={book.name}
                  author={book.author}
                  coverImage={BookNest} // You can set a default cover image or pass book-specific cover image here
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
