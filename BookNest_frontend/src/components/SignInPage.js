import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/SignInPage.css';
import Header from './Header';
import signin from './signinService'; // Import the signin function

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Import useNavigate hook from react-router-dom
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
        // Check if the entered email and password match the admin credentials
        if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
          // Redirect admin to the admin page after successful login
          navigate('/admin');
          // Show a success message to the admin
          toast.success('Admin login successful!');
          return; // Exit the function to prevent further execution
        }
  
        // Call the signin function with email and password for regular users
        const userData = await signin(formData.email, formData.password);
  
        // Check if the signin request returned a non-null user object
        if (userData && userData.userId) {
          // Store user data in local storage for authentication
          localStorage.setItem('userData', JSON.stringify(userData));
  
          // Redirect user to the dashboard page after successful login
          navigate('/userbook');
  
          // Show a success message to the user
          toast.success('Login successful!');
        } else {
          // Show an error message to the user if credentials are incorrect for regular users
          toast.error('Login failed. Please check your credentials and try again.');
        }
      } catch (error) {
        // Handle login errors, e.g., incorrect credentials
        console.error('Login failed:', error);
        // Show an error message to the user
        toast.error('Login failed. Please check your credentials and try again.');
      }
    }
  };
  

  return (
    <>
      <Header />
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
    </>
  );
};

export default LoginPage;
