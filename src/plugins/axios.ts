import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    let errorMessage = '';
    if(error.response) {
      errorMessage = error.response.data?.message || `Error ${error.response.status}`;
    } else if (error.request) {
      errorMessage = 'Network error. Please check your connection.';
    } else {
      errorMessage = error.message;
    }
    return Promise.reject(new Error(errorMessage));
  }
)

export default apiClient;
