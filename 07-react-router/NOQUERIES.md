```jsx
Landing.jsx;
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
	console.log(request);
	// Construct a new url and get the search parameter from it.
	const url = new URL(request.url);
	console.log(url);
	const searchKey = url.searchParams.get("search");
	const searchTerm = searchKey || "coffee";
	const response = await axios.get(`${searchURL}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
	const { drinks, searchTerm } = useLoaderData();

	return (
		<>
			<SearchForm searchTerm={searchTerm}></SearchForm>
			<CocktailList drinks={drinks}></CocktailList>
		</>
	);
};
export default Landing;
```

```js
Cocktail.jsx;

import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrapper/CocktailPage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const { id } = params;
		const { data } = await axios.get(`${singleCocktailUrl}${id}`);

		return { id, data };
	};

const Cocktail = () => {
	const { id } = useLoaderData();
	const { data } = useQuery();

	if (!data) {
		<Navigate to="/"></Navigate>;
		// return <h1>Something went wrong</h1>;
	}
	const singleDrink = data.drinks[0];

	const {
		idDrink,
		strDrink: name,
		strDrinkThumb: imgSrc,
		strAlcoholic: info,
		strCategory: glass,
		strInstructions,
	} = singleDrink;

	const validIngredients = Object.keys(singleDrink)
		.filter(
			(key) => key.startsWith("strIngredient") && singleDrink[key] != null
		)
		.map((key) => singleDrink[key]);

	return (
		<Wrapper>
			<header>
				<Link to="/" className="btn">
					back home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className="drink">
				<img src={imgSrc} alt={name}></img>
				<div className="drink-info">
					<p>
						<span className="drink-data">name : </span> {name}
					</p>
					<p>
						<span className="drink-data">category : </span> {glass}
					</p>
					<p>
						<span className="drink-data">info : </span> {info}
					</p>
					<p>
						<span className="drink-data">ingredients : </span>{" "}
						{validIngredients.map((item, index) => {
							return (
								<span className="ingredient" key={item}>
									{item}
									{index < validIngredients.length - 1 ? "," : ""}
								</span>
							);
						})}
					</p>
					<p>
						<span className="drink-data">instructions : </span>{" "}
						{strInstructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};
export default Cocktail;
```
