import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000';

export async function login(username: string, password: string) {
  const response = await axios.post(baseURL + '/login', {
    email: username,
    password,
  });

  return await response.data;
}
