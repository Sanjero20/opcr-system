import api from '@/services/axios';
import { Account } from '@/types/account';

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
    const response = await api.post('/login', {
      email: username,
      password,
    });

    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
