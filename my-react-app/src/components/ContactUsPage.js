import React from 'react';
import './css/ContactUsPage.css';

function ContactUsPage() {
  return (
    <div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        
        <div className="contact-info">
          <p>Email: support@booknest.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: Booknest Inc., 123 Main St, Anytown, USA</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
