// contextProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getUserFromStorage, saveUserToStorage, removeUserFromStorage } from '../util/auth_utils';
import { requestToken } from '../services';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [barbers, setBarbers] = useState(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // Função para fazer login
  const login = (userData) => {
    setUserState(userData);
    saveUserToStorage(userData);
    requestToken(userData.token);
    setIsUserAuthenticated(true);
  };

  // Função para fazer logout
  const logout = () => {
    setUserState(null);
    removeUserFromStorage();
    requestToken(''); // Remove o token do axios
    setIsUserAuthenticated(false);
  };

  // Função para atualizar o estado do usuário
  const setUser = (userData) => {
    if (userData) {
      login(userData);
    } else {
      logout();
    }
  };

  // Verificar se há dados salvos no localStorage ao carregar a aplicação
  useEffect(() => {
    const checkStoredAuth = () => {
      const storedUser = getUserFromStorage();

      if (storedUser && storedUser.token) {
        setUserState(storedUser);
        requestToken(storedUser.token);
        setIsUserAuthenticated(true);
        console.log('Usuário carregado do localStorage:', storedUser);
      } else {
        setIsUserAuthenticated(false);
        console.log('Nenhum usuário autenticado encontrado no localStorage');
      }
    };

    checkStoredAuth();
  }, []);

  console.log('AppProvider user:', user);
  console.log('AppProvider isUserAuthenticated:', isUserAuthenticated);

  const contextValue = {
    user,
    setUser,
    barbers,
    setBarbers,
    login,
    logout,
    isUserAuthenticated,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
