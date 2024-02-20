import React, { useState, useEffect } from 'react';
import UserHeader from './UserHeader';
import axios from 'axios';
import './BooksPage.css';
import BookReader from './PdfViewer'; // Import the BookReader component
import { Modal } from 'react-bootstrap'; // Import modal components from React Bootstrap
import BookNest from '../components/Assets/BookNest.png'

const UserBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // State to store the selected book
  const [showPdfViewer, setShowPdfViewer] = useState(false); // State to control the visibility of the PDF viewer

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

  const handleBookRead = (book) => {
    // Set the selected book when the user clicks on "Read"
    setSelectedBook(book);
    setShowPdfViewer(true); // Show the PDF viewer modal
  };

  const handleClosePdfViewer = () => {
    setShowPdfViewer(false); // Hide the PDF viewer modal
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <>
      <UserHeader />
      
      <div className="books-page">
        <h1>Available Books</h1>
        <div className="books-container">
          {books.map((book) => (
            <div key={book.bookId} className="book-container">
              <div className="book-info">
                {/* Hardcoded image */}
                <img src={BookNest} alt="Placeholder" />
                <div>
                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                  <p>{book.description}</p>
                </div>
              </div>
              <button className="read-button" onClick={() => handleBookRead(book)}>Read</button>
            </div>
          ))}
        </div>
      </div>
      {/* Render the PDF viewer modal if a book is selected */}
      {selectedBook && (
        <Modal show={showPdfViewer} onHide={handleClosePdfViewer}>
          <Modal.Header closeButton>
            <p></p>
            <Modal.Title>{selectedBook.name}</Modal.Title>
          </Modal.Header>
          <div>
          <Modal.Body>
            <div className="pdf-viewer-container">
              <BookReader filename={selectedBook.ebookContent} />
            </div>
          </Modal.Body>
          </div>
          <Modal.Footer>
            <button onClick={handleRefresh} className="back-button">Back</button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default UserBooksPage;
