import CocktailCard from "./CocktailCard";
import CocktailsStyled from "../wrappers/Cocktails";

const Cocktails = ({ drinks }) => {
  if (!drinks) {
    return (
      <div className="not-found">
        <h2>your drink does not match our drinks</h2>
      </div>
    );
  }

  return (
    <CocktailsStyled>
      {drinks.map((drink) => {
        const { idDrink: id } = drink;

        return <CocktailCard key={id} {...drink}></CocktailCard>;
      })}
    </CocktailsStyled>
  );
};
export default Cocktails;
