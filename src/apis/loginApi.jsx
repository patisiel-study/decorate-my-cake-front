import axios from 'axios';

export const LoginAPI = async (email, password) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  try {
    const response = await axios.post(`${SERVER_URL}/member/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const TestAPI = async (accessToken) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.post(
      `${SERVER_URL}/member/test`,
      {},
      axiosConfig
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
