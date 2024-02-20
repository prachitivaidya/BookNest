import React, { useState, useEffect } from 'react';
import { getSubscribedUsers } from './SubscribedUserService';
import './SubscribedUser.css';
import AdminHeader from './AdminHeader';

const SubscribedUser = () => {
  const [subscribedUsers, setSubscribedUsers] = useState([]);

  useEffect(() => {
    fetchSubscribedUsers();
  }, []);

  const fetchSubscribedUsers = async () => {
    try {
      const data = await getSubscribedUsers();
      setSubscribedUsers(data);
    } catch (error) {
      console.error('Error fetching subscribed users:', error);
    }
  };

  return (
    <>
     <AdminHeader />
    <div className="subscribed-user-container">
      <h1>Subscribed Users</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Registration Date</th>
            <th>Expiry Date</th>
            <th>Email</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Plan Name</th>
            
          </tr>
        </thead>
        <tbody>
          {subscribedUsers.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.registrationDate}</td>
              <td>{user.expiryDate}</td>
              <td>{user.visitedUser.email}</td>
              <td>{user.visitedUser.name}</td>
              <td>{user.visitedUser.gender}</td>
              <td>{user.plan.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default SubscribedUser;
