import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function login(username: string, password: string) {
  try {
    const response = await axios.post(baseURL + '/login', {
      email: username,
      password,
    });

    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
