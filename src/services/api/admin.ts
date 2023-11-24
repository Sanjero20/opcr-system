import { api, ApiResponse } from '@/services/axios';
import { AccountInfo } from '@/types/response/admin';

api.defaults.baseURL += '/api/admin';

export async function getAccountsList(): Promise<ApiResponse<AccountInfo[]>> {
  try {
    const response = await api.get('/accounts');
    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function getAccountInfo(
  id: string,
): Promise<ApiResponse<AccountInfo>> {
  try {
    const response = await api.get(`/account/${id}`);
    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
