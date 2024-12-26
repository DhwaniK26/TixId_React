import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAuthState, setdata } from "../Redux/slice/authSlice";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | any>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const res = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(res);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    // dispatch(setdata({ phonenumber: " " }));
    dispatch(clearAuthState(" "));
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
