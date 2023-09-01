import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const useMyGlobalContext = () => useContext(GlobalContext);

const MyGlobalContextProvider = ({ children }) => {
  const [college, setCollege] = useState("Massachuset Institute of technology");
  return (
    <GlobalContext.Provider value={{ college }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { useMyGlobalContext, GlobalContext };
export default MyGlobalContextProvider;
