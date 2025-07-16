import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [barbers, setBarbers] = useState();
  
  console.log('AppProvider user:', user);
  
  const context = {
    user,
    setUser,
    barbers,
    setBarbers
  }

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;