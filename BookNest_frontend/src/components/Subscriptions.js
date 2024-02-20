import React from 'react';
import './css/Subscriptions.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Subscriptions = () => {
  return (
    <>
    <Header />
    <div className="outer">
      <Link to="/signin" className="subscription-link">
        <button>
          <div className="silver glittering">
            <h1>Silver</h1>
            <h2 className="silverh2">No. Of Months: 3</h2>
            <h1 className="bottomCenterSilver">₹400</h1>
          </div>
        </button>
      </Link>
      <Link to="/signin" className="subscription-link">
        <button>
          <div className="gold glittering">
            <h1>Gold</h1>
            <h2 className="goldh2">No. Of Months: 6</h2>
            <h1 className="bottomCenterGold">₹600</h1>
          </div>
        </button>
      </Link>
      <Link to="/signin" className="subscription-link">
        <button>
          <div className="platinum glittering">
            <h1>Platinum</h1>
            <h2 className="plath2">No. Of Months: 12</h2>
            <h1 className="bottomCenterPlatinum">₹1000</h1>
          </div>
        </button>
      </Link>
    </div>
    </>
  );
};

export default Subscriptions;
