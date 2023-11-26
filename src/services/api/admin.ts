import { ApiResponse, api } from './defaults';
import { Account, Campus } from '@/types/data-types';

api.defaults.baseURL += '/api/admin';
// axios.defaults.withCredentials = true;

export async function getAccountsList(): Promise<ApiResponse<Account[]>> {
  try {
    const response = await api.get('/accounts');
    return await response.data;
  } catch (error: any) {
    return error;
  }
}

export async function getCampusList(): Promise<ApiResponse<Campus[]>> {
  try {
    const response = await api.get('/campuses');
    return await response.data;
  } catch (error: any) {
    return error;
  }
}
export async function createCampus(name: string, offices: any[]) {
  try {
    const response = await api.post('/create/campus', {
      name,
      offices,
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
