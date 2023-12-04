import { api } from '.';
import { OPCR, Target } from '@/types/opcr.types';

export async function getOPCR(): Promise<OPCR> {
  try {
    const response = await api.get('/head/opcr');
    const opcr = await response.data;
    return opcr.data || null;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function saveMFODetails(id: string) {
  try {
    const response = await api.post('');
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function createOpcr(opcrData: Target[]) {
  try {
    const response = await api.post('/head/add/mfo', opcrData);
    return await response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
