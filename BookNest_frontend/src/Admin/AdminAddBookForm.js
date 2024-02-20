import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminAddBookForm.css';
import AdminHeader from './AdminHeader';
import { addBook } from './bookService';

const AdminAddBookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    genreId: '',
    author: '',
    numberOfPages: 0, // Ensure numberOfPages field is initialized with a number value
    ebookContent: '',
  });

  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/genres');
        setGenres(response.data);
      } catch (error) {
        console.error('Failed to fetch genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.genreId) validationErrors.genreId = 'Genre is required';
    if (!formData.author) validationErrors.author = 'Author is required';
    if (!formData.numberOfPages) validationErrors.numberOfPages = 'Number of pages is required';
    if (!formData.ebookContent) validationErrors.ebookContent = 'Ebook content is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await addBook(formData);
        toast.success('Book added successfully!');
        navigate('/file-upload'); // Navigate to the file upload page
      } catch (error) {
        console.error('Add book failed:', error);
        toast.error('Failed to add book. Please try again.');
      }
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="admin-add-book-form">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name <span>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter book name"
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="genreId">Genre <span>*</span></label>
          <select
            id="genreId"
            name="genreId"
            value={formData.genreId}
            onChange={handleChange}
            required
          >
            <option value="">Select genre</option>
            {genres.map((genre) => (
              <option key={genre.gid} value={genre.gid}>{genre.genreName}</option>
            ))}
          </select>
          {errors.genreId && <p className="error-message">{errors.genreId}</p>}

          <label htmlFor="author">Author <span>*</span></label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
          {errors.author && <p className="error-message">{errors.author}</p>}

          <label htmlFor="numberOfPages">Number of Pages <span>*</span></label>
          <input
            type="number"
            id="numberOfPages"
            name="numberOfPages"
            value={formData.numberOfPages}
            onChange={handleChange}
            placeholder="Enter number of pages"
            required
          />
          {errors.numberOfPages && <p className="error-message">{errors.numberOfPages}</p>}

          <label htmlFor="ebookContent">Ebook Content <span>*</span></label>
          <textarea
            id="ebookContent"
            name="ebookContent"
            value={formData.ebookContent}
            onChange={handleChange}
            placeholder="Enter eBook content"
            required
          />
          {errors.ebookContent && <p className="error-message">{errors.ebookContent}</p>}

          <button type="submit">Add Book</button>
          <Link to="/admin" className="cancel-link">Cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default AdminAddBookForm;
