import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
	return {
		queryKey: ["search", searchTerm || "coffee"],
		queryFn: async () => {
			const response = await axios.get(`${searchURL}${searchTerm}`);
			return response.data.drinks;
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		// Construct a new url and get the search parameter from it.
		const url = new URL(request.url);

		const searchKey = url.searchParams.get("search");
		const searchTerm = searchKey || "coffee";
		// Check if data is there, if so, give it. if not, invoke the searchQuery.
		await queryClient.ensureQueryData(searchçocktailsQuery(searchTerm));
		return { searchTerm };
	};

const Landing = () => {
	const { searchTerm } = useLoaderData();
	const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

	return (
		<>
			<SearchForm searchTerm={searchTerm}></SearchForm>
			<CocktailList drinks={drinks}></CocktailList>
		</>
	);
};
export default Landing;
