import axios from 'axios';

// Define a baseURL que aponta para o backend no Render
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // exemplo: https://nextraceserver.onrender.com/auth
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepta requisições e adiciona o token, se existir
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔐 Função de login com campos corretos
export async function login(username, password) {
  const res = await api.post('/login', { username, password });
  return res.data;
}

// 👤 Rota protegida para perfil
export async function getMe() {
  const res = await api.get('/me');
  return res.data.usuario;
}

// 📊 Dashboard administrativo
export async function getAdminDashboard() {
  const res = await api.get('/dashboard');
  return res.data;
}

export default api;