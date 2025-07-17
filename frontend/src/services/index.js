// services/index.js
import axios from 'axios';
import { removeUserFromStorage } from '../util/auth_utils';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

// Interceptor para adicionar o token automaticamente nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('clickbeard_auth');
    if (token) {
      try {
        const authData = JSON.parse(token);
        config.headers.Authorization = authData.token;
      } catch (error) {
        console.error('Erro ao parsear token do localStorage:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas de erro (ex: token expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido ou expirado
      removeUserFromStorage();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const requestToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = token;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export const requestLogin = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

export const requestCreateUser = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

export const sendRequest = async (method, endpoint, body = null) => {
  try {
    const config = {
      method,
      url: endpoint,
      data: body,
    };

    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default api;
