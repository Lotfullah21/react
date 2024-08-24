import { useState, useContext, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// custom hook
export const useAppContext = () => {
	return useContext(NavbarContext);
};

const Navbar = () => {
	const [user, setUser] = useState("KING");
	const logout = () => {
		setUser(null);
	};

	return (
		<NavbarContext.Provider value={{ user, logout }}>
			<nav className="navbar">
				<h4>CONTEXT API</h4>
				<NavLinks></NavLinks>
			</nav>
		</NavbarContext.Provider>
	);
};
export default Navbar;
