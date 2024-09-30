import { products } from "../db/data";
import { useGlobalContext } from "../context/context";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
	const { state, dispatchCartAction, filterState, dispatchFilterAction } =
		useGlobalContext();

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD_TO_CART", payload: product });
	};

	const removeFromCart = (product) => {
		dispatchCartAction({ type: "REMOVE", payload: product });
	};

	const itemInCart = (id) => {
		return state.cart.some((item) => item.id === id);
	};

	const filteredByPrice = filterState.price
		? products.filter((product) => product.price <= filterState.price)
		: products;

	const filteredByRating = filterState.rating
		? filteredByPrice.filter((product) => product.rating >= filterState.rating)
		: filteredByPrice;

	const filteredByName = filterState.itemName
		? filteredByRating.filter((product) =>
				product.name.toLowerCase().includes(filterState.itemName.toLowerCase())
		  )
		: filteredByRating;

	return (
		<section className="cards-container">
			{filteredByName.length > 0 &&
				filteredByName.map((product) => {
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
