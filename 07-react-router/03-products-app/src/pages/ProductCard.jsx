import { useNavigate } from "react-router-dom";

const ProductCart = ({ product }) => {
	const { id, name, price, rating, discount, company } = product;
	const navigate = useNavigate();

	const handleSingleProduct = () => {
		navigate(`/product-details/${id}`);
	};
	return (
		<div className="card">
			<div onClick={handleSingleProduct}>
				<h4 className="title">{name}</h4>
			</div>
			<div>
				<h5>{company}</h5>
			</div>

			<div className="card-footer">
				<p>{rating}⭐️</p>
				<h5>{price}</h5>
				<h5>{discount}</h5>
			</div>
		</div>
	);
};
export default ProductCart;
