import { products } from "../db/data";
import { useCartContext } from "../context";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
	const { cart, setCart } = useCartContext();

	const handleCart = (item) => {
		setCart([...cart, item]);
	};
	//  Function to check if an item is in the cart,  Use 'some' to return a boolean
	const itemInCart = (id) => cart.some((cartItem) => cartItem.id === id);

	return (
		<section className="cards-container">
			{products.map((product) => {
				console.log(product.id);
				return (
					<div key={product.id} className="card-wrapper">
						<ProductCard product={product} key={product.id}></ProductCard>
						<button className="cart-btn" onClick={() => handleCart(product)}>
							{itemInCart(product.id) ? "go to cart" : "add to cart"}
						</button>
					</div>
				);
			})}
		</section>
	);
};
export default ProductsContainer;
