import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Define the base URL for the API
const path_api = process.env.REACT_APP_API_URL || 'https://your-default-api.com/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: path_api,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add tokens or any custom headers
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem('token'); // Example: getting token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle global errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle errors globally here
    if (error.response) {
      // Example: Handling 401 Unauthorized error
      if (error.response.status === 401) {
        // Redirect to login page or handle the error appropriately
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
