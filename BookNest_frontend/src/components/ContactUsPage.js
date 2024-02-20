import React, { useState, useEffect } from 'react';
import './css/ContactUsPage.css';
import Header from './Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUsPage() {
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    // Show a toast message when the ContactUsPage component mounts,
    // but only if it hasn't been shown already
    if (!toastShown) {
      toast.info('Contact us for any questions or inquiries.');
      setToastShown(true);
    }
  }, [toastShown]);

  return (
    <>
    <Header />
    <div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        
        <div className="contact-info">
          <p>Email: support@booknest.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: Booknest Inc., 123 Main St, Anytown, India</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUsPage;
