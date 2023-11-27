import { AccountFormType } from '@/types/form-schema';
import { api } from './defaults';
import { Account, Campus } from '@/types/data-types';

api.defaults.baseURL += '/api/admin';

// Accounts
export async function getAccountsList(): Promise<Account[]> {
  try {
    const response = await api.get('/accounts');
    const accounts = await response.data;
    return accounts.data;
  } catch (error) {
    throw new Error('Failed to fetch accounts.');
  }
}

export async function createAccount(data: AccountFormType) {
  try {
    const response = await api.post(`/create/${data.permission}`, data);
    return await response.data;
  } catch (error) {
    throw new Error('Failed to create a new account');
  }
}

// Campus
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
    throw new Error('Failed to create campus');
  }
}
