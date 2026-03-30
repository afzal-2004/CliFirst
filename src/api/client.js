import axios from 'axios';

const API = axios.create({
  baseURL: 'http://10.0.2.2:3000', // change if needed
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (optional)
API.interceptors.request.use(
  config => {
    console.log('API Request:', config.url);
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptor (optional)
API.interceptors.response.use(
  response => response,
  error => {
    console.log('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default API;
