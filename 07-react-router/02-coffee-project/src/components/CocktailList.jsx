import Wrapper from "../assets/wrapper/CocktailListWrapperPage";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
	if (!drinks) {
		return <h4 style={{ textAlign: "center" }}>No Matching Coffee</h4>;
	}

	const formattedDrinks = drinks.map((drink) => {
		const {
			idDrink,
			strDrink: name,
			strDrinkThumb,
			strAlcoholic,
			strCategory,
		} = drink;

		return {
			id: idDrink,
			name,
			imgSrc: strDrinkThumb,
			info: strAlcoholic,
			glass: strCategory,
		};
	});

	return (
		<Wrapper>
			{formattedDrinks.map((item) => {
				return <CocktailCard key={item.id} {...item}></CocktailCard>;
			})}
		</Wrapper>
	);
};
export default CocktailList;
