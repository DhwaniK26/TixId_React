import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  // Initialize state from localStorage or default to false
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   return localStorage.getItem('isAuthenticated') === 'true';
  // });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(()=>{
    const res = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(res)
  },[])
  
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
