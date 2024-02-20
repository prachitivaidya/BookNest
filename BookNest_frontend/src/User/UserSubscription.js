// UserSubscriptions.js

import React, { useState, useEffect } from 'react';
import './UserSubscription.css';
import UserHeader from './UserHeader';
import SubscriptionModal from './SubscriptionModal'; // Import SubscriptionModal component

const UserSubscriptions = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [userId, setUserId] = useState(null); // State to store user ID

  useEffect(() => {
    // Fetch user ID from local storage or wherever it's stored
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserId(userData.userId);
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <UserHeader />
      <div className="buy-subscription-button-container">
        <button onClick={openModal} className="buy-subscription-button">
          Buy Subscription
        </button>
      </div>
      <div className="outer">
        {/* Subscription options */}
        <button>
          <div className="silver glittering">
            <h1>Silver</h1>
            <h2 className="silverh2">No. Of Months: 3</h2>
            <h1 className="bottomCenterSilver">₹400</h1>
          </div>
        </button>
        <button>
          <div className="gold glittering">
            <h1>Gold</h1>
            <h2 className="goldh2">No. Of Months: 6</h2>
            <h1 className="bottomCenterGold">₹600</h1>
          </div>
        </button>
        <button>
          <div className="platinum glittering">
            <h1>Platinum</h1>
            <h2 className="plath2">No. Of Months: 12</h2>
            <h1 className="bottomCenterPlatinum">₹1000</h1>
          </div>
        </button>
      </div>
      {/* Render SubscriptionModal only when showModal state is true and userId is not null */}
      {showModal && userId && <SubscriptionModal userId={userId} closeModal={closeModal} />}
    </>
  );
};

export default UserSubscriptions;
