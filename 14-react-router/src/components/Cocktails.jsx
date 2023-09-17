import CocktailCard from "./CocktailCard";
import CocktailsStyled from "../wrappers/Cocktails";

const Cocktails = ({ drinks }) => {
  if (!drinks) {
    // Handle the case where drinks is undefined or empty
    return null;
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
