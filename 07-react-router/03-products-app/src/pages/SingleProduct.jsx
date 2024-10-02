import { products } from "../db/data";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
	const params = useParams();
	const { productId } = params;
	const currentProduct = products.find((product) => product.id == productId);
	const { id, name, price, rating, discount, company } = currentProduct;

	return (
		<div>
			<div className="single-card">
				<h4 className="title">{name}</h4>
				<div>
					<h5>{company}</h5>
				</div>
				<div>
					<p>{rating}⭐️</p>
					<h5>{price}</h5>
					<h5>{discount}</h5>
				</div>
			</div>
		</div>
	);
};
export default SingleProduct;
