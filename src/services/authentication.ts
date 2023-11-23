import { Account } from '@/types/account';
import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export type LoginResponse = {
  error: string | null;
  loggedIn: boolean;
  permission: Account;
  token: string;
};

export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
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
