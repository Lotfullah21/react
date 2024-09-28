import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/CocktailCardPage";
const CocktailCard = ({ id, name, imgSrc, info, glass }) => {
	return (
		<Wrapper>
			<div className="img-container">
				<img src={imgSrc} alt={name} className="img"></img>
			</div>
			<div className="footer">
				<h4>{name}</h4>
				<h5>{info}</h5>
				<p>{glass}</p>
				<Link to={`/cocktail/${id}`} className="btn">
					detail
				</Link>
			</div>
		</Wrapper>
	);
};
export default CocktailCard;
