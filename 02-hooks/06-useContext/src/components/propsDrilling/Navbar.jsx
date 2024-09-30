import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
	const [user, setUser] = useState("KING");
	const logout = () => {
		setUser(null);
	};

	return (
		<nav className="navbar">
			<h4>CONTEXT API</h4>
			<NavLinks user={user} logout={logout}></NavLinks>
		</nav>
	);
};
export default Navbar;
