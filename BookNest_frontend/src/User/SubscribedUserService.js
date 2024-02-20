// SubscriptionModal.js

import React, { useState, useEffect } from 'react';
import './SubscriptionModal.css';
import PlanService from '../Admin/PlanService'; // Import PlanService to fetch subscription plans
import SubscriptionService from './SubscriptionService'; // Import SubscriptionService to handle user subscriptions

const SubscriptionModal = ({ userId, closeModal }) => {
  const [plans, setPlans] = useState([]); // State to store subscription plans

  // Function to fetch subscription plans from the backend
  const fetchPlans = async () => {
    try {
      const response = await PlanService.getPlans(); // Fetch plans from backend
      setPlans(response.data); // Update plans state with fetched data
    } catch (error) {
      console.error('Error fetching plans:', error);
      // Handle error fetching plans
    }
  };

  // Call fetchPlans function when component mounts
  useEffect(() => {
    fetchPlans();
  }, []);

  // Function to handle subscription
  const handleSubscribe = async (planId) => {
    try {
      await SubscriptionService.subscribeUser(userId, planId); // Subscribe user to the selected plan
      closeModal(); // Close the modal after successful subscription
    } catch (error) {
      console.error('Error subscribing user:', error);
      // Handle error subscribing user
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Choose a Subscription</h2>
        <div className="subscription-options">
          {/* Render subscription plans */}
          {plans.map(plan => (
            <div key={plan.id} className="subscription-option">
              <h1>{plan.name}</h1>
              <h2>No. Of Months: {plan.numberOfMonths}</h2>
              <h1>₹{plan.price}</h1>
              <button onClick={() => handleSubscribe(plan.id)}>Subscribe</button> {/* Subscribe button */}
            </div>
          ))}
        </div>
        <button className="close-modal-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
