import { api } from '.';
import { OPCR_Response } from '@/types';
import { Target } from '@/types/opcr.types';

export async function getOPCR(): Promise<OPCR_Response> {
  try {
    const response = await api.get('/head/opcr');
    const opcr = await response.data;
    return opcr;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function addMFO(target: Omit<Target, '_id'>) {
  try {
    const response = await api.post('/head/add/mfo', target);
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function deleteMFO(id: string) {
  try {
    const response = await api.delete('/head/delete/mfo/' + id);
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updateMFODetails(target: Target) {
  const id = target._id.$oid;
  try {
    const response = await api.post(`/head/edit/mfo/${id}`, target);
    return await response.data;
  } catch (error: any) {
    throw new Error(error.message);
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
