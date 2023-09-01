import { children, createContext } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const Info = {
    message: "Hello, I am from context",
  };

  return <MyContext.Provider value={{ Info }}>{children}</MyContext.Provider>;
};

export { MyContext };
export default MyContextProvider;
