import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthonticated, setIsAuthonticated] = useState(undefined);

  useEffect(() => {
    //onAuthStateChange
  }, []);

  const login = async (email, password) => {
    try {
    } catch (e) {}
  };

  const logout = async () => {
    try {
    } catch (e) {}
  };

  const register = async (email, password, username, profileUrl) => {
    try {
    } catch (e) {}
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthonticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
