import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({
	image,
	price,
	url,
	github,
	amount,
	total,
	title,
	text,
	id,
}) => {
	const dispatch = useDispatch();
	return (
		<article className="cart-item">
			<img src={image} alt={title}></img>
			<div className="cart-info">
				<h4 className="item-title">{title}</h4>
				<h4 className="item-price">$ {price}</h4>
				<button className="btn-remove" onClick={() => dispatch(removeItem(id))}>
					remove
				</button>
			</div>
			<div className="cart-items">
				<button
					className="btn-amount"
					onClick={() => {
						dispatch(increase(id));
					}}>
					<FaChevronUp></FaChevronUp>
				</button>
				<p className="amount">{amount}</p>
				<button
					className="btn-amount"
					onClick={() => {
						if (amount === 1) {
							dispatch(removeItem(id));
							return;
						}
						dispatch(decrease(id));
					}}>
					<FaChevronDown></FaChevronDown>
				</button>
			</div>
		</article>
	);
};
export default CartItem;
