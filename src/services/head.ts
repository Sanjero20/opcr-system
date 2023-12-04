import { api } from '.';
import { Target } from '@/types/opcr.types';

export async function getOPCR(): Promise<Target[]> {
  try {
    const response = await api.get('/head/opcr');
    const opcr = await response.data;
    return opcr.data || null;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updateMFODetails(target: Target) {
  try {
    const response = await api.post('/head/add/mfo', target);
    console.log(response);
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function saveOPCR(opcrData: Target[]) {
  try {
    const response = await api.post('/head/add/bulk/mfo', opcrData);
    return await response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function submitOPCR() {
  try {
    const response = await api.get('/head/submit/opcr');
    const opcrDetails = await response.data;
    return opcrDetails;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
