import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/SignInPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = {};
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make POST request to login user
        const response = await axios.post('http://localhost:8080/login', formData);

        // Assuming the response contains user data upon successful login
        const userData = response.data;

        // Store user data in local storage for authentication
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect user to the home page after successful login
        navigate('/');
      
        // Show a success message to the user
        toast.success('Login successful!');
      } catch (error) {
        // Handle login errors, e.g., incorrect credentials
        console.error('Login failed:', error);
        // Show an error message to the user
        toast.error('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <div className="registration-form">
      <h2>Login to Booknest</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email <span>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="password">Password <span>*</span></label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Sign up here</Link>
        </p>
        <p>
          Forgot your password? <Link to="/forgot-password">Reset it here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
