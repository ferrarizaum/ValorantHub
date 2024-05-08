import React, { createContext, useContext, useState } from "react";

const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <UserNameContext.Provider value={{ username, updateUsername }}>
      {children}
    </UserNameContext.Provider>
  );
};

export const useUserName = () => useContext(UserNameContext);
