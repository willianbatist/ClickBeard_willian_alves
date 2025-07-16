import { AUTH_STORAGE_KEY } from '../constants';

// Função para salvar dados do usuário no localStorage
export const saveUserToStorage = (userData) => {
  try {
    const authData = {
      ...userData,
      timestamp: Date.now()
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
  }
};

// Função para recuperar dados do usuário do localStorage
export const getUserFromStorage = () => {
  try {
    const storedData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedData) return null;

    const authData = JSON.parse(storedData);
    
    // Verifica se o token ainda é válido (1 hora = 3600000 ms)
    const currentTime = Date.now();
    const tokenAge = currentTime - authData.timestamp;
    const TOKEN_EXPIRY = 60 * 60 * 1000; // 1 hora em milliseconds
    
    if (tokenAge > TOKEN_EXPIRY) {
      // Token expirado, remove do localStorage
      removeUserFromStorage();
      return null;
    }

    // Remove o timestamp antes de retornar os dados do usuário
    const { timestamp, ...userData } = authData;
    return userData;
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error);
    return null;
  }
};

// Função para remover dados do usuário do localStorage
export const removeUserFromStorage = () => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error('Erro ao remover dados do usuário:', error);
  }
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  const userData = getUserFromStorage();
  return userData !== null && userData.token !== undefined;
};

// Função para decodificar o token JWT (opcional, para verificação adicional)
export const decodeJWT = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
};

// Função para verificar se o token JWT está expirado
export const isTokenExpired = (token) => {
  try {
    const decoded = decodeJWT(token);
    if (!decoded || !decoded.exp) return true;
    
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Erro ao verificar expiração do token:', error);
    return true;
  }
};