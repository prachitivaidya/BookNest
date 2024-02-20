import React, { useEffect, useState } from 'react';
import './UserInfo.css';
import UserHeader from './UserHeader';

const UserInfo = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  return (
    <>
      <UserHeader />
      <div className="user-info-container">
        <h2>User Information</h2>
        {userData ? (
          <div>
            <p>User ID: {userData.userId}</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
            
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    </>
  );
}

export default UserInfo;
