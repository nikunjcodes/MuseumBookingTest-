const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const request = async (endpoint, method = 'GET', body = null, token = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const loginUser = async (data) => request('/auth/login', 'POST', data);
export const registerUser = async (data) => request('/auth/register', 'POST', data);
export const createBooking = async (data, token) => request('/booking', 'POST', data, token);
export const fetchBookings = async (token) => request('/booking', 'GET', null, token);
export const processPayment = async (data, token) => request('/payment', 'POST', data, token);
