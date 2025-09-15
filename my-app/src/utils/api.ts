import axios from 'axios';

// 1. Crie e exporte a instância base do Axios
// Ele usa a variável de ambiente do Next.js que configuramos no .env.local
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 2. Crie e exporte a função para definir o token de autenticação
// O AuthContext usará esta função para manter as chamadas à API autenticadas.
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// 3. Exporte um objeto com as chamadas da API de autenticação
export const authAPI = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  register: (userData: { name: string; email: string; password: string; }) => api.post('/auth/register', userData),
};

// 4. Exporte um objeto com as chamadas da API de conteúdo
export const contentAPI = {
  getAll: () => api.get('/content'),
  getByKey: (key: string) => api.get(`/content/${key}`),
  create: (key: string, value: string) => api.post('/content', { key, value }),
  update: (key: string, value: string) => api.put(`/content/${key}`, { value }),
  delete: (key: string) => api.delete(`/content/${key}`),
};

// 5. Exporte um objeto com as chamadas da API de usuários
export const usersAPI = {
  getAll: () => api.get('/users'),
  getById: (id: string) => api.get(`/users/${id}`),
  create: (userData: { name: string; email: string; password: string; role?: string }) => api.post('/users', userData),
  update: (id: string, userData: any) => api.put(`/users/${id}`, userData),
  delete: (id: string) => api.delete(`/users/${id}`),
};