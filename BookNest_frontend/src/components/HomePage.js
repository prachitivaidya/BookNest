import React from 'react';
import { Link } from 'react-router-dom';
import './css/HomePage.css';
import Footer from './Footer';
import Header from './Header';

function HomePage() {
  return (
    <>
    <Header />
    <div className="home-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to Booknest!</h1>
        <p className="welcome-text">Your ultimate destination for ebooks</p>
      </div>
      <Link to="/books" className="book-animation-link">
        <div className="book-animation-container">
          <div className="book-animation">
            <div className="book">
              <div className="cover">
                <div className="inner-cover"></div>
                <div className="cover-left"></div>
                <div className="cover-right"></div>
              </div>
              <div className="pages"></div>
            </div>
          </div>
        </div>
      </Link>
      <Footer />
    </div>
    </>
  );
}

export default HomePage;
