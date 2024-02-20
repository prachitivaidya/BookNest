// userDetailsService.js
import axios from 'axios';

export const fetchVisitedUserData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/visited_users');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error fetching visited user data:', response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error fetching visited user data:', error);
    return null;
  }
};
