import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal /modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
	const dispatch = useDispatch();

	const { cartItems: data, total, amount } = useSelector((state) => state.cart);

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>Your bag</h2>
					<h4 className="empty-cart">is currently empty!</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			<header>
				<h2>Your bag</h2>
			</header>
			<div>
				{data.map((item) => {
					return <CartItem key={item.id} {...item}></CartItem>;
				})}
			</div>
			<footer>
				<hr></hr>
				<div className="cart-total">
					<h4>
						total<span>${total.toFixed(2)}</span>
					</h4>
				</div>
				<button className="btn clear-btn" onClick={() => dispatch(openModal())}>
					clear
				</button>
			</footer>
		</section>
	);
};
export default CartContainer;
