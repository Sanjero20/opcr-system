import { api } from '.';
import { PMT_Office } from '@/types';
import { OPCR } from '@/types/opcr.types';

export async function getOffices(): Promise<PMT_Office[]> {
  try {
    const response = await api.get('/pmt/office/report');
    const offices = await response.data;
    return offices.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOPCRbyOfficeId(id: string): Promise<OPCR> {
  try {
    const response = await api.get('/pmt/opcr/office/' + id);
    const opcr = await response.data;
    return opcr.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOPCRbyId(id: string) {
  try {
    const response = await api.get('/pmt/get/opcr/' + id);
    const opcr = await response.data;
    return opcr.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getRemarksTemplate(opcrId: string) {
  try {
    const response = await api.get('/pmt/bulk/template/remark/' + opcrId);
    const template = await response.data;
    return template;
  } catch (error: any) {
    throw new Error(error);
  }
}
