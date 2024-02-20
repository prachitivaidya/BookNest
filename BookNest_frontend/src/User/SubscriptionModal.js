// SubscriptionModal.js

import React, { useState, useEffect } from 'react';
import './SubscriptionModal.css';
import PlanService from '../Admin/PlanService';
import SubscriptionService from './SubscriptionService';

const SubscriptionModal = ({ userId, closeModal }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await PlanService.getPlans();
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const handleSubscribe = async (planId) => {
    try {
      if (!userId) {
        console.error('User ID is null.');
        return;
      }
      await SubscriptionService.subscribeUser(userId, planId);
      closeModal();
    } catch (error) {
      console.error('Error subscribing user:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Choose a Subscription</h2>
        <div className="subscription-options">
          {plans.map(plan => (
            <div key={plan.pid} className="subscription-option">
              <h1>{plan.name}</h1>
              <h2>No. Of Months: {plan.numberOfMonths}</h2>
              <h1>₹{plan.price}</h1>
              <button onClick={() => handleSubscribe(plan.pid)}>Subscribe</button>
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
