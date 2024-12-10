import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (token, userName) => {
    Cookies.set("token", token);
    Cookies.set("userName", userName);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    setIsAuthenticated(false);
  };

  const checkAuthentication = () => {
    const storedToken = Cookies.get("token");
    return !!storedToken;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
