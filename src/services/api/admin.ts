import { AccountFormType } from '@/types/form-schema';
import { api } from './defaults';
import { Account, Campus } from '@/types/data-types';

const adminURL = '/api/admin';

// Accounts
export async function getAccountsList(): Promise<Account[]> {
  try {
    const response = await api.get(adminURL + '/accounts');
    const accounts = await response.data;
    return accounts.data;
  } catch (error) {
    throw new Error('Failed to fetch accounts.');
  }
}

export async function createAccount(data: AccountFormType) {
  try {
    const response = await api.post(
      adminURL + `/create/${data.permission}`,
      data,
    );
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getUnassignedHeadAccounts(): Promise<Account[]> {
  try {
    const response = await api.get(adminURL + '/accounts/head/unassigned');
    const accounts = await response.data;
    return accounts.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Campus
export async function getCampusList(): Promise<Campus[]> {
  try {
    const response = await api.get(adminURL + '/campuses');
    const campuses = await response.data;
    return campuses.data;
  } catch (error) {
    throw new Error('Failed to fetch campuses.');
  }
}

export async function createCampus(name: string, offices: any[]) {
  try {
    const response = await api.post(adminURL + '/create/campus', {
      name,
      offices,
    });
    return await response.data;
  } catch (error) {
    throw new Error('Failed to create campus');
  }
}
