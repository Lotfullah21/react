import { Link } from "react-router-dom";
import CocktailCardWrapper from "../wrappers/CocktailCard";
const CocktailCard = (props) => {
  const {
    strDrink: name,
    strCategory: category,
    strInstructions: guides,
    strAlcoholic: alcoholic,
    strDrinkThumb: url,
    idDrink: id,
  } = props;

  return (
    <CocktailCardWrapper className="cocktail-card">
      <div className="img-container">
        <img src={url} alt={name}></img>
      </div>
      <div className="footer">
        <h3>{name}</h3>
        <p>{category}</p>
        <Link to={`/cocktail/${id}`} className="btn-detail">
          details
        </Link>
      </div>
    </CocktailCardWrapper>
  );
};
export default CocktailCard;
