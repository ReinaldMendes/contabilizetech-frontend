// API utilities for ContabilizeTech backend integration
// This file contains utility functions to interact with the backend API

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

// Generic API request function
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('admin_token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

// Authentication API calls
export const authAPI = {
  async login(email: string, password: string) {
    return apiRequest(process.env.REACT_APP_API_AUTH_LOGIN || '/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async register(userData: { name: string; email: string; password: string }) {
    return apiRequest(process.env.REACT_APP_API_AUTH_REGISTER || '/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  async forgotPassword(email: string) {
    return apiRequest(process.env.REACT_APP_API_AUTH_FORGOT_PASSWORD || '/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async resetPassword(token: string, password: string) {
    return apiRequest(process.env.REACT_APP_API_AUTH_RESET_PASSWORD || '/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  },

  async verifyToken() {
    return apiRequest(process.env.REACT_APP_API_AUTH_VERIFY_TOKEN || '/auth/verify-token', {
      method: 'GET',
    });
  },

  async refreshToken() {
    return apiRequest(process.env.REACT_APP_API_AUTH_REFRESH_TOKEN || '/auth/refresh-token', {
      method: 'POST',
    });
  },

  async logout() {
    return apiRequest(process.env.REACT_APP_API_AUTH_LOGOUT || '/auth/logout', {
      method: 'POST',
    });
  },
};

// CMS API calls
export const cmsAPI = {
  async getContent() {
    return apiRequest(process.env.REACT_APP_API_CMS_GET_CONTENT || '/cms/content', {
      method: 'GET',
    });
  },

  async updateContent(content: any) {
    return apiRequest(process.env.REACT_APP_API_CMS_UPDATE_CONTENT || '/cms/content', {
      method: 'PUT',
      body: JSON.stringify(content),
    });
  },

  async uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return apiRequest(process.env.REACT_APP_API_CMS_UPLOAD_IMAGE || '/cms/upload-image', {
      method: 'POST',
      headers: {}, // Remove Content-Type to let FormData set it
      body: formData,
    });
  },
};

// Leads API calls
export const leadsAPI = {
  async create(leadData: any) {
    return apiRequest(process.env.REACT_APP_API_LEADS_CREATE || '/leads', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  },

  async getAll() {
    return apiRequest(process.env.REACT_APP_API_LEADS_GET_ALL || '/leads', {
      method: 'GET',
    });
  },

  async getById(id: string) {
    return apiRequest(`/leads/${id}`, {
      method: 'GET',
    });
  },

  async update(id: string, leadData: any) {
    return apiRequest(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(leadData),
    });
  },

  async delete(id: string) {
    return apiRequest(`/leads/${id}`, {
      method: 'DELETE',
    });
  },
};

// Newsletter API calls
export const newsletterAPI = {
  async subscribe(email: string) {
    return apiRequest(process.env.REACT_APP_API_NEWSLETTER_SUBSCRIBE || '/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async unsubscribe(email: string) {
    return apiRequest(process.env.REACT_APP_API_NEWSLETTER_UNSUBSCRIBE || '/newsletter/unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};

// Appointments API calls
export const appointmentsAPI = {
  async create(appointmentData: any) {
    return apiRequest(process.env.REACT_APP_API_APPOINTMENTS_CREATE || '/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  },

  async getAll() {
    return apiRequest(process.env.REACT_APP_API_APPOINTMENTS_GET_ALL || '/appointments', {
      method: 'GET',
    });
  },

  async getById(id: string) {
    return apiRequest(`/appointments/${id}`, {
      method: 'GET',
    });
  },

  async update(id: string, appointmentData: any) {
    return apiRequest(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(appointmentData),
    });
  },

  async delete(id: string) {
    return apiRequest(`/appointments/${id}`, {
      method: 'DELETE',
    });
  },
};

// Utility functions for common operations
export const utils = {
  // Format errors for user display
  formatError(error: any): string {
    if (error?.message) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'Ocorreu um erro inesperado. Tente novamente.';
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('admin_token');
    return !!token;
  },

  // Get user data from localStorage
  getUserData() {
    const userData = localStorage.getItem('admin_user');
    return userData ? JSON.parse(userData) : null;
  },

  // Clear authentication data
  clearAuthData() {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  },

  // Validate file for upload
  validateImageFile(file: File): { valid: boolean; error?: string } {
    const maxSize = parseInt(process.env.REACT_APP_MAX_FILE_SIZE || '5242880'); // 5MB default
    const allowedTypes = (process.env.REACT_APP_ALLOWED_IMAGE_TYPES || 'image/jpeg,image/png,image/webp,image/gif').split(',');

    if (file.size > maxSize) {
      return { valid: false, error: 'Arquivo muito grande. Tamanho máximo: 5MB' };
    }

    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Tipo de arquivo não permitido. Use: JPEG, PNG, WebP ou GIF' };
    }

    return { valid: true };
  },
};

export default {
  authAPI,
  cmsAPI,
  leadsAPI,
  newsletterAPI,
  appointmentsAPI,
  utils,
};