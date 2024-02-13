import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage'; // Adjust the path as necessary
import RegistrationPage from './components/RegistrationPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
