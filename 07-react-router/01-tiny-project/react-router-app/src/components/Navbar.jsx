import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">home</Link>
			<Link to="/about">about</Link>
			<Link to="/courses">courses</Link>
		</nav>
	);
};
export default Navbar;
