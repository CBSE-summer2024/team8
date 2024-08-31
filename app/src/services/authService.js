import axios from 'axios';

// Correct API base URL
const API_BASE_URL = 'https://mock-api.binaryboxtuts.com/api'; // Adjust path if necessary

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    if (response.data && response.data.user) {
      return response.data.user;
    }
    throw new Error('Login failed');
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const register = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { firstName, lastName, email, password });
    if (response.data && response.data.user) {
      return response.data.user;
    }
    throw new Error('Registration failed');
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};
