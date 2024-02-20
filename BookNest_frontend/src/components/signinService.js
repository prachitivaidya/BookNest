import axios from 'axios';

const API_URL = 'http://localhost:8080/api/visited-users'; // Replace this with your actual backend API URL

const signin = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please check your credentials and try again.');
  }
};

export default signin;
