import axios from 'axios';
import { getCookie } from '../cookie';

export type ApiResponse<T> = {
  data: T;
  error: any;
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = getCookie('token');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error),
// );
