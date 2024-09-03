import { useSelector } from "react-redux/es/hooks/useSelector";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
	const cart = useSelector((store) => store.cart);

	return (
		<nav>
			<div className="nav-center">
				<h3 className="logo">redux toolkit</h3>
				<div className="nav-container">
					<FaShoppingCart className="cart-icon"></FaShoppingCart>
					<div className="amount-container">
						<p className="total-amount">{cart.amount}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
