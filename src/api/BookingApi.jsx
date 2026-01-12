import axios from "axios";

// Backend base URL
const BASE_URL = "http://localhost:9000";

/**
 * Create Customer
 */
export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/customer`,
      customerData
    );
    return response.data; // CustomerDTO with customerId
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

export const createBooking = async (bookingData, customerId, roomId) => {
  try {
    // Note the template literal matches your @PostMapping(path = "/id/{customerId}/room/{roomId}")
    const response = await axios.post(
      `${BASE_URL}/booking/id/${customerId}/room/${roomId}`,
      bookingData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
