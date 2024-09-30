import { useGlobalContext } from "../context/context";

const Navbar = () => {
	const { state, dispatchCartAction } = useGlobalContext();
	const { cart } = state;

	return (
		<nav className="navbar">
			<div className="cart">
				<h3>Cart Items</h3>
				<span className="cart-item">{cart.length < 1 ? "0" : cart.length}</span>
			</div>
		</nav>
	);
};
export default Navbar;
