import axios from 'axios';

export const CakeCreateAPI = async (
  cakeName,
  candleCreatePermission,
  candleViewPermission,
  candleCountPermission
) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const API_TOKEN = localStorage.getItem('accessToken');

  try {
    const response = await axios.post(
      `${SERVER_URL}/cakes/create`,
      {
        cakeName,
        candleCreatePermission,
        candleViewPermission,
        candleCountPermission,
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message ||
          'An error occurred while fetching the data.'
      );
    } else {
      throw new Error('An error occurred while fetching the data.');
    }
  }
};
