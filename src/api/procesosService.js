import axios from 'axios';

const API_URL = 'http://10.150.22.15:8091/v1/procesos'; // Reemplaza con la URL de tu backend

export async function getProcesos() {
    const response = await axios.get(API_URL);
    return response.data;
  }
export const getProceso = (id) => axios.get(`${API_URL}/${id}`);
export const createProceso = (data) => axios.post(API_URL, data);
export const updateProceso = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProceso = (id) => axios.delete(`${API_URL}/${id}`);
