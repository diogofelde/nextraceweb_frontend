import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(username, password) {
  const res = await api.post('/api/login', { username, password });
  return res.data.token;
}

export async function getMe() {
  const res = await api.get('/api/me');
  return res.data.usuario;
}

export async function getAdminDashboard() {
  const res = await api.get('/api/admin/dashboard');
  return res.data;
}

export default api;