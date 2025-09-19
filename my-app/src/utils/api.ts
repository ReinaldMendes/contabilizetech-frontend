import axios from 'axios';

// 1. Instância Centralizada do Axios
// Usa a variável de ambiente do Next.js que configuramos no .env.local
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 2. Função para Definir o Token de Autenticação
// O AuthContext usa esta função para manter as chamadas à API autenticadas.
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// --- Sistema de Mock para Desenvolvimento ---

type MockContentType = { [key: string]: string };

const mockResponses = {
  login: {
    data: {
      token: 'mock_jwt_token_12345',
      user: {
        id: '1',
        name: 'Admin Dev',
        email: 'admin@dev.local',
        role: 'ADMINISTRATOR'
      }
    }
  },
  content: {
    data: {
      'hero.title': 'Soluções contábeis automatizadas para sua empresa crescer',
      'hero.description': 'Automatize sua contabilidade com tecnologia de ponta. Mais tempo para focar no que realmente importa: o crescimento do seu negócio.',
      'hero.image': '/img/hero-image.png',
      'footer.logo': '/img/contabilizetech_logo.png',
      'footer.description': 'Transformamos a gestão contábil das empresas com tecnologia de ponta e expertise especializada. Sua empresa mais eficiente, nossa missão.',
      'footer.contact.email': 'comercial@contabilizetech.com.br',
      'footer.contact.phone': '(42) 99820-2183',
      'footer.contact.address': 'Rua Riachuelo, 129, sala 1',
      'footer.services.title': 'Serviços',
      'footer.services.item1': 'Contabilidade Digital',
      'footer.services.item1.href': '#services',
      'footer.services.item2': 'Obrigações Fiscais',
      'footer.services.item2.href': '#services',
      'footer.services.item3': 'Gestão Financeira',
      'footer.services.item3.href': '#services',
      'footer.company.title': 'Empresa',
      'footer.company.item1': 'Sobre nós',
      'footer.company.item1.href': '#quem-somos',
      'footer.copyright': '© 2024 ContabilizeTech. Todos os direitos reservados. CNPJ: 00.000.000/0001-00',
    } as MockContentType
  }
};

const handleMockRequest = async (url: string) => {
  console.log(`[DEV MODE] Mocking API call for: ${url}`);
  await new Promise(resolve => setTimeout(resolve, 200));

  if (url === '/auth/login') return mockResponses.login;
  if (url === '/content') return mockResponses.content;
  
  return { data: { message: `Mock response for ${url}` } };
};

// --- Definições dos Endpoints ---

const isDevMode = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === 'true';

export const authAPI = {
  login: (email: string, password: string) => 
    isDevMode ? handleMockRequest('/auth/login') : api.post('/auth/login', { email, password }),
};

export const contentAPI = {
  getAll: () => 
    isDevMode ? handleMockRequest('/content') : api.get('/content'),
  update: (key: string, value: string) => api.put(`/content/${key}`, { value }),
};

// --- SEÇÃO DE USERSAPI ADICIONADA ---
export const usersAPI = {
  getAll: () => api.get('/users'),
  getById: (id: string) => api.get(`/users/${id}`),
  create: (userData: { name: string; email: string; password: string; role?: string }) => api.post('/users', userData),
  update: (id: string, userData: any) => api.put(`/users/${id}`, userData),
  delete: (id: string) => api.delete(`/users/${id}`),
};
export const partnersAPI = {
  getAll: () => api.get('/partners'),
  create: (formData: FormData) => api.post('/partners', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id: string) => api.delete(`/partners/${id}`),
};
export const pageAPI = {
  getBySlug: (slug: string) => api.get(`/pages/${slug}`),
  updateSections: (slug: string, sections: any[]) => api.put(`/pages/${slug}/sections`, { sections }),
};