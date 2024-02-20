import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you have a route for the sign-in page
import { registerUser } from './registrationService';
import './css/RegistrationPage.css';
import Header from './Header';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
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
        // Make POST request to register user using registration service
        await registerUser(formData);

        // Set registration success flag
        setRegistrationSuccess(true);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <>
    <Header />
    <div className="registration-form">
      {registrationSuccess ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You have successfully registered.</p>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Register Customer</h2>
          <form onSubmit={handleSubmit}>
            <div className="label-container">
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
            </div>

            <div className="label-container">
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
            </div>

            <div className="label-container">
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
            </div>

            <div className="label-container">
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
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
    </>
  );
}

export default RegistrationPage;
