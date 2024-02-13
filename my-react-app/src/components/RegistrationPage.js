import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/RegistrationPage.css';
import axios from 'axios';

function RegistrationPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.gender) validationErrors.gender = 'Gender is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make POST request to register user
        await axios.post('http://localhost:8080/customer/add', formData);

        // Navigate to the home page after successful registration
        navigate('/');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <div className="registration-form">
      <h2>Register Customer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name <span>*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email <span>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder="Enter your password"
          required
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <label htmlFor="gender">Gender <span>*</span></label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="error-message">{errors.gender}</p>}

        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/signin">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default RegistrationPage;
