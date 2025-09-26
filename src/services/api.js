import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \Bearer \\;
  return config;
});

export async function login(identificador, password) {
  const res = await api.post('/api/login', { identificador, password });
  return res.data.token;
}

export async function getMe() {
  const res = await api.get('/me');
  return res.data.usuario;
}

export async function getAdminDashboard() {
  const res = await api.get('/admin/dashboard');
  return res.data;
}
