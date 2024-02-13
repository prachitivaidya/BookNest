import React from 'react';
import './css/AboutUsPage.css'; 
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h2>Welcome to Booknest!</h2>
      <h3>Your Ultimate Ebook Subscription and Management System</h3>

      <p>
        Booknest is a state-of-the-art platform designed to revolutionize the way you discover, access, and manage ebooks. Powered by modern technologies, our platform offers a seamless experience for book enthusiasts like you.
      </p>

      <h3>Our Mission:</h3>
      <p>
        At Booknest, our mission is to provide you with a vast library of ebooks at your fingertips. Whether you're into fiction, non-fiction, romance, mystery, or any other genre, we've got you covered. With Booknest, you can explore new worlds, gain knowledge, and embark on exciting adventures—all from the comfort of your device.
      </p>

      <h3>What We Offer:</h3>
      <p>
        With Booknest, you get unlimited access to a diverse collection of ebooks through our subscription plans. Whether you prefer bestsellers, classics, or hidden gems, you'll find something to suit your taste. Our user-friendly interface makes it easy to discover new titles, bookmark favorites, and pick up where you left off, ensuring a seamless reading experience.
      </p>

      <h3>Why Choose Booknest:</h3>
      <ul>
        <li>
          <strong>Extensive Library:</strong> Gain access to thousands of ebooks across various genres, ensuring there's always something new to explore.
        </li>
        <li>
          <strong>Convenience:</strong> Enjoy the flexibility of reading anytime, anywhere, on any device—whether it's your smartphone, tablet, or computer.
        </li>
        <li>
          <strong>Personalization:</strong> Tailor your reading experience with customizable preferences, recommendations, and curated collections based on your interests.
        </li>
        <li>
          <strong>Affordability:</strong> Get exceptional value with our affordable subscription plans, offering unlimited reading for a fraction of the cost of purchasing individual ebooks.
        </li>
      </ul>

      <p>
        Booknest is more than just a subscription service—it's a community of avid readers, authors, and publishers coming together to celebrate the joy of reading. Join us on this literary journey and unlock a world of possibilities with Booknest.
      </p>

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default AboutUsPage;
