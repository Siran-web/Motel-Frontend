import axios from "axios";

const API_BASE_URL = "http://localhost:9000";

export const checkAvailability = async (
  roomType,
  checkIn,
  checkOut
) => {
  const response = await axios.get(`${API_BASE_URL}/availability`, {
    params: {
      roomType,
      checkIn,
      checkOut,
    },
  });
  return response.data;
};
