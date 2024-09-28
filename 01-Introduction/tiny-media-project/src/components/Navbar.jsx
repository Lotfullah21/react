import { Link } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">home</Link>
			<Link to="/courses">courses</Link>
		</nav>
	);
};
export default Navbar;
