import { api } from '.';
import { Account, AccountCreated, Campus, Office } from '@/types';
import { AccountFormType } from '@/types/form.schema';

const adminURL = '/admin';

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

export async function createAccount(
  data: AccountFormType,
): Promise<AccountCreated> {
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

export async function deleteAccount(id: string) {
  try {
    const response = await api.delete(adminURL + `/account/delete/${id}`);
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getHeadAccounts(): Promise<Account[]> {
  try {
    const response = await api.get(adminURL + '/accounts/head');
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

export async function deleteCampus(id: string) {
  try {
    const response = await api.delete(adminURL + `/delete/campus/${id}`);
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getOfficesByCampusId(
  campusId: string,
): Promise<Office[]> {
  try {
    const response = await api.get(adminURL + `/departments/${campusId}`);
    const offices = await response.data;
    return offices.data;
  } catch (error) {
    throw new Error('Failed to fetch offices');
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

// Assign
export async function assignPMTToCampus(pmtid: string, campus: string) {
  try {
    const response = await api.post(adminURL + '/assign/pmt/campus', {
      pmtid,
      campus,
    });
    return await response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function assignHeadToOffice(
  headid: string,
  campusid: string,
  departmentid: string,
) {
  try {
    const response = await api.post(adminURL + '/assign/head/campus', {
      campusid,
      departmentid,
      headid,
    });
    return await response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
