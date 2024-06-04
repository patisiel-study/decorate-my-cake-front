import axios from 'axios';

export const FriendListAPI = async () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    try {
      const response = await axios.get(`${SERVER_URL}/`, {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };