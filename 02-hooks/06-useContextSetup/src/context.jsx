import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const MyGlobalContextProvider = ({ children }) => {
	const [college, setCollege] = useState(
		"Massachusetts Institute of technology"
	);

	const data = [12];
	return (
		<GlobalContext.Provider value={{ college, data }}>
			{children}
		</GlobalContext.Provider>
	);
};

const useMyGlobalContext = () => useContext(GlobalContext);

export { useMyGlobalContext };

export default MyGlobalContextProvider;
