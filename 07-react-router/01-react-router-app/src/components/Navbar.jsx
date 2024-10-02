import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";
const Navbar = () => {
	const { loggedIn } = useAuthContext();

	const getStyle = ({ isActive }) => {
		return { color: isActive ? "red" : "" };
	};

	const navigate = useNavigate();
	const handleNavigation = () => {
		navigate("/courses");
	};

	return (
		<nav className="navbar">
			<NavLink style={getStyle} to="/">
				home
			</NavLink>
			<NavLink style={getStyle} to="/about">
				about
			</NavLink>
			<NavLink style={getStyle} to="/courses">
				courses
			</NavLink>
			<NavLink style={getStyle} to="/cart">
				cart
			</NavLink>
			<NavLink style={getStyle} to="/login">
				{loggedIn ? "log out" : "login"}
			</NavLink>
			<button onClick={handleNavigation}>go to courses</button>
		</nav>
	);
};
export default Navbar;
