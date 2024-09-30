import { useGlobalContext } from "../context/context";

const Navbar = () => {
	const { state, dispatchCartAction, filterState, dispatchFilterAction } =
		useGlobalContext();

	const handlePrice = (e) => {
		dispatchFilterAction({ type: "PRICE", payload: e.target.value });
	};
	const handleRating = (e) => {
		dispatchFilterAction({ type: "RATING", payload: e.target.value });
	};
	const handleProductName = (e) => {
		dispatchFilterAction({ type: "PRODUCT_NAME", payload: e.target.value });
	};

	return (
		<nav className="navbar">
			<div className="cart">
				<h3>Cart Items</h3>
				<span className="cart-item">
					{state.cart.length < 1 ? "0" : cart.length}
				</span>
			</div>

			<input
				name="price"
				type="number"
				placeholder="price..."
				onChange={handlePrice}></input>
			<input
				name="rating"
				type="text"
				placeholder="rating..."
				onChange={handleRating}></input>
			<input
				type="text"
				placeholder="product name..."
				onChange={handleProductName}></input>
		</nav>
	);
};
export default Navbar;
