// SubscriptionService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const subscribeUser = async (userId, planId) => {
  try {
    const response = await axios.post(`${BASE_URL}/subscribed-users`, {
      visitedUserId: userId,
      planId: planId
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to subscribe user: ${error.message}`);
  }
};

export default { subscribeUser };
