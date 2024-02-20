export const getSubscribedUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/subscribed-users');
      if (!response.ok) {
        throw new Error('Failed to fetch subscribed users');
      }
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  