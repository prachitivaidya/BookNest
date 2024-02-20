// bookService.js

import axios from 'axios';

export const addBook = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/ebooks', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
};
