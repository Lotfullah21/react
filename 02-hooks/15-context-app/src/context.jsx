import { useContext, createContext } from "react";
import { useState } from "react";

const MyContext = createContext();

const ContextApp = ({ children }) => {
	const [cart, setCart] = useState([]);

	return (
		<MyContext.Provider value={{ cart, setCart }}>
			{children}
		</MyContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(MyContext);
};

export default ContextApp;
