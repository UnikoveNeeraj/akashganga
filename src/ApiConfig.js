import axios from 'axios';
import { BASE_URL } from './config';

const customAxios = (dynamicBaseURL) => {
  return axios.create({
    baseURL: dynamicBaseURL,
  });
};

const API = customAxios(BASE_URL);

const apiConfig = {
  getData: (url, headers, params) => API({
    method: 'GET',
    url,
    headers,
    params,
  }),
  postData: (url, headers, dataValue, params) => API({
    method: 'POST',
    url,
    headers,
    data: dataValue,
    params
  }),
  putData: (url, headers, params, dataValue) => API({
    method: 'PUT',
    url,
    headers,
    params,
    data: dataValue,
  }),
};

// Add a request interceptor

// Add a response interceptor
API.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
);
API.interceptors.request.use(
  (config) => {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);


export default apiConfig;
