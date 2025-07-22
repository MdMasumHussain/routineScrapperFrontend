import axios from 'axios';


const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, 
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => { 
    return response;
  },
  (error) => { 
    return Promise.reject(error.response ? error.response.data : error.message);
  }
);

export default axiosClient;