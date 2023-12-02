import { api } from '.';
import { PMT_Office } from '@/types';

export async function getOffices(): Promise<PMT_Office[]> {
  try {
    const response = await api.get('/pmt/office/report');
    const offices = await response.data;
    return offices.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
