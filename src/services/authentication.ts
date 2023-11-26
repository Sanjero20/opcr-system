import axios from 'axios';
import { AccountType } from '@/types/data-types';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export type LoginResponse = {
  error: string | null;
  loggedIn: boolean;
  permission: AccountType;
  token: string;
};

export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const response = await axios.post('/login', {
      email: username,
      password,
    });

    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
