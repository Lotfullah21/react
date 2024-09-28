import { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext(undefined);

// Create a provider
const UserProvider = ({ children }) => {
	const [user] = useState({ name: "ahmad", email: "ahmad@gmail.com" });
	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
};

// Creating a custom hook to use the user context.
export const useUser = () => {
	return useContext(UserContext);
};

export default UserProvider;
