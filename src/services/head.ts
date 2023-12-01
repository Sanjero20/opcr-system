import { api } from '.';

export async function retrieveOpcr() {
  try {
    const response = await api.get('/head/opcr');
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createOpcr() {
  try {
    const response = await api.post('/head/create/opcr');
    return await response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
