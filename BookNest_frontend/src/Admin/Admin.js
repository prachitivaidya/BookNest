// Admin.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminBookPage from './book/AdminBookPage';
import AdminAddBookForm from './AdminAddBookForm'; // Import the AdminAddBookForm component

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<AdminBookPage />} />
        <Route path="/admin-books" element={<AdminBookPage />} /> {/* Add route for admin books */}
        <Route path="/add-book" element={<AdminAddBookForm />} /> {/* Add route for adding a book */}
      </Routes>
      <AdminFooter />
    </div>
  );
};

export default Admin;
