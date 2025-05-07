import axios from 'axios';

const API = axios.create({
  baseURL: 'http://TU_IP_BACKEND:PUERTO', // Cambia esto por la URL de tu backend real
});

export const getProcesos = () => API.get('/procesos');
export const getCalendarios = () => API.get('/calendarios');
// Añade más endpoints según sea necesario
