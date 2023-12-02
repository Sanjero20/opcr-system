import { OPCR, Target } from '@/types/opcr.types';
import { api } from '.';

export async function retrieveOpcr(): Promise<OPCR[]> {
  try {
    const response = await api.get('/head/opcr');
    const opcr = await response.data;
    return opcr.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createOpcr(opcrData: Target[]) {
  try {
    const response = await api.post('/head/create/opcr', opcrData);
    return await response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
