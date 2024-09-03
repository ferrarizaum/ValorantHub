import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // change to false

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (!storedToken) {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (token, username) => {
    document.cookie = `token=${token}`;
    document.cookie = `username=${username}`;
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const checkAuthentication = () => {
    const storedToken = localStorage.getItem("token");
    return !!storedToken;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        checkAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
