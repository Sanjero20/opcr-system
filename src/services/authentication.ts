import { api } from '.';
import { Permission } from '@/types';

export type LoginResponse = {
  error: string | null;
  loggedIn: boolean;
  permission: Permission;
  token: string;
};

export async function loginAccount(
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
    return error.response;
  }
}
