import { products } from "../db/data";
import { useGlobalContext } from "../context/context";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
	const { state, dispatchCartAction } = useGlobalContext();

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD_TO_CART", payload: product });
	};

	const removeFromCart = (product) => {
		dispatchCartAction({ type: "REMOVE", payload: product });
	};

	const itemInCart = (id) => {
		return state.cart.some((item) => item.id === id);
	};

	console.log(state.cart);
	return (
		<section className="cards-container">
			{products.map((product) => {
				return (
					<div key={product.id} className="card-wrapper">
						<ProductCard product={product} key={product.id}></ProductCard>
						<button className="cart-btn" onClick={() => addToCart(product)}>
							{itemInCart(product.id) ? "go to cart" : "add to cart"}
						</button>
						<button
							className="cart-btn"
							onClick={() => removeFromCart(product)}>
							remove
						</button>
					</div>
				);
			})}
		</section>
	);
};
export default ProductsContainer;
