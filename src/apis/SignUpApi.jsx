
import axios from "axios";


export const signUpAPI = async (newUserData) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  try {
    const response = await axios.post(
      `${SERVER_URL}/member/signup`,
      newUserData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};