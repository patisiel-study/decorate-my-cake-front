import axios from "axios";

export const CakeAPI = async () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const API_TOKEN = localStorage.getItem("accessToken");
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  if (!SERVER_URL) {
    throw new Error("SERVER_URL is not defined");
  }

  try {
    const response = await axios.get(`${SERVER_URL}/cakes/view`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      params: {
        email: "test1234@gmail.com",
        createdYear: currentYear,
      },
    });
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
