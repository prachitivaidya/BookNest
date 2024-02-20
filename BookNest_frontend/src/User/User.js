// User.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import UserInfo from './UserInfo';
import UserSubscription from './UserSubscription';
import PdfViewer from './PdfViewer';

const User = () => {
  return (
    <div>
      <UserHeader />

      {/* <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/subscription" element={<UserSubscription />} />
      </Routes> */}
      <UserFooter />
    </div>
  );
};

export default User;
