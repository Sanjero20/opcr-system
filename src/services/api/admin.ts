import { ApiResponse, api } from './defaults';
import { Account, Campus } from '@/types/data-types';

api.defaults.baseURL += '/api/admin';
// axios.defaults.withCredentials = true;

export async function getAccountsList(): Promise<Account[]> {
  try {
    const response = await api.get('/accounts');
    const accounts = await response.data;
    return accounts.data;
  } catch (error) {
    throw new Error('Failed to fetch accounts.');
  }
}

export async function getCampusList(): Promise<Campus[]> {
  try {
    const response = await api.get('/campuses');
    const campuses = await response.data;
    return campuses.data;
  } catch (error) {
    throw new Error('Failed to fetch campuses.');
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
