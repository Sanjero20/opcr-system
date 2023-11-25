import { api } from '@/services/axios';
import { AccountType } from '@/types/data-types';

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
    const response = await api.post('/login', {
      email: username,
      password,
    });

    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
