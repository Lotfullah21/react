const ProductCart = ({ product }) => {
	const { id, name, price, rating, discount, company } = product;

	return (
		<div className="card">
			<div>
				<h4>{name}</h4>
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
