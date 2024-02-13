import React from 'react';
import './css/HomePage.css';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to Booknest!</h1>
        <marquee>
          <p className="welcome-text">Your ultimate destination for ebooks</p>
        </marquee>
      </div>
      {/* Add your content here */}
      <Footer />
    </div>
  );
}

export default HomePage;
