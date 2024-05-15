
import axios from "axios";
import { SERVER_URL } from "../config/ApiConfig"

export const signUpAPI = async (newUserData) => {
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