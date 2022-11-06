import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data.statusCode) {
      switch (error.response.data.statusCode) {
        case 400:
          alert(error.response.data.message);
          break;
        default:
          return;
      }
    }
    return Promise.reject(error);
  }
);
