import axios from 'axios';
import { getCookie } from '@/lib/cookie';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const token = getCookie('token');
  config.headers.Authorization = token;
  return config;
});
