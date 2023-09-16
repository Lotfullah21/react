import CocktailCard from "./CocktailCard";
import CocktailsStyled from "../wrappers/Cocktails";
const Cocktails = ({ drinks }) => {
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
