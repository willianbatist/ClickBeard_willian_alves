const AUTH_STORAGE_KEY = 'clickbeard_auth';

export const saveUserToStorage = (userData) => {
  try {
    const authData = {
      ...userData,
      timestamp: Date.now(),
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
  }
};

export const getUserFromStorage = () => {
  try {
    const storedData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedData) return null;

    const authData = JSON.parse(storedData);

    if (authData.token && isTokenExpired(authData.token)) {
      removeUserFromStorage();
      return null;
    }

    const { timestamp, ...userData } = authData;
    return userData;
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error);
    return null;
  }
};

export const removeUserFromStorage = () => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error('Erro ao remover dados do usuário:', error);
  }
};

export const isAuthenticated = () => {
  const userData = getUserFromStorage();
  return userData !== null && userData.token !== undefined;
};

export const decodeJWT = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
};

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
