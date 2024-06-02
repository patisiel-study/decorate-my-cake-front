import axios from "axios";

export const CakeAPI = async () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  if (!SERVER_URL || !API_TOKEN) {
    throw new Error("SERVER_URL or API_TOKEN is not defined");
  }

  try {
    const response = await axios.get(`${SERVER_URL}/cakes/view`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    console.log(response);
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message ||
          "An error occurred while fetching the data."
      );
    } else {
      throw new Error("An error occurred while fetching the data.");
    }
  }
};
