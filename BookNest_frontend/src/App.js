import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import RegistrationPage from './components/RegistrationPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import Subscriptions from './components/Subscriptions';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import BooksPage from './Book/BooksPage'; // Corrected import path
import AdminPage from './Admin/Admin';
import UserPage from './User/User';
import BookReader from './BookReader/BookReader'; // Import BookReader component
import AdminAddBookForm from './Admin/AdminAddBookForm';
import UserSubscriptions from './User/UserSubscription';
import AdminPlan from './Admin/Plan';
import AdminGenre from './Admin/Genre';
import AdminSuscribedUser from './Admin/SubscribedUser';
import FileUploadComponent from './components/FileUploadComponent';
import UserBooksPage from './User/UserBooksPage';
import PdfViewer from './User/PdfViewer';
import UserInfo from'./User/UserInfo';

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/userbook" element={<UserBooksPage />} />
          <Route path='/plans'element={<AdminPlan/>}/>
          <Route path='/genres'element={<AdminGenre/>}/>
          <Route path='/subscribedUsers'element={<AdminSuscribedUser/>}/>
          
          <Route path="/book-reader" element={<BookReader pdfUrl="document2.pdf" />} />
          
          <Route path="/pdf-reader" element={<PdfViewer filename="ThousandSplendidSun.pdf" />} />
          {/* <Route path="/pdf-reader/:filename" element={<PdfViewer />} /> */}

          <Route path="/file-upload" element={<FileUploadComponent />} />
          {/* Add a route for the Add Book form */}
          <Route path="/add-book" element={<AdminAddBookForm />} />
          <Route path="/usersubscription" element={<UserSubscriptions />} /> {/* Add this route */}
          <Route path="/userinfo" element={<UserInfo/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
