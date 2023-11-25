import { api, ApiResponse } from '@/services/axios';
import { apiHeaders } from '@/services/api/headers';
import { Account, Campus } from '@/types/data-types';

api.defaults.baseURL += '/api/admin';

export async function getAccountsList(): Promise<ApiResponse<Account[]>> {
  try {
    const response = await api.get('/accounts', apiHeaders());
    return await response.data;
  } catch (error: any) {
    return error;
  }
}

export async function getCampusList(): Promise<ApiResponse<Campus[]>> {
  try {
    const response = await api.get('/campuses', apiHeaders());
    return await response.data;
  } catch (error: any) {
    return error;
  }
}
