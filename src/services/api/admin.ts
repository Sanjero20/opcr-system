import api from '@/services/axios';
import { AccountInfo } from '@/types/response/admin';

api.defaults.baseURL += '/api/admin';

type AccountListReponse = {
  data: AccountInfo[];
  error: any;
};

export async function getAccountsList(): Promise<AccountListReponse> {
  try {
    const response = await api.get('/accounts');
    return await response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
