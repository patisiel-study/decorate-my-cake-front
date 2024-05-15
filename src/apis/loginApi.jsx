
import axios from "axios";
import { SERVER_URL } from "../config/ApiConfig"

export const loginAPI = async (email, password ) => {
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

export const testAPI = async (accessToken) => {
  try {
    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    };
    const response = await axios.post(`${SERVER_URL}/member/test`, {}, axiosConfig);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};