import axios from 'axios';

const API_BASE_URL = 'https://mock-api.binaryboxtuts/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
  if (response.data && response.data.user) {
    return response.data.user;
  }
  throw new Error('Login failed');
};

export const register = async (firstName, lastName, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/register`, { firstName, lastName, email, password });
  if (response.data && response.data.user) {
    return response.data.user;
  }
  throw new Error('Registration failed');
};
