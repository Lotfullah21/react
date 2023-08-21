import React, { createContext, useContext, useState } from "react";

const userContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState(["ahmad"]);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
