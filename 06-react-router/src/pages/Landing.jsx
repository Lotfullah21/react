import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import Cocktails from "../components/Cocktails";
import axios from "axios";

const cocktailsURL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// get the data using searchCocktailQuery.
const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", "" || searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${cocktailsURL}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// loaders returns the search term
export const loader =
  (queryCLient) =>
  async ({ request }) => {
    // construct a new url from the request url
    const newURL = new URL(request.url);
    // from the url, retrieve the "search" key parameter
    const searchTerm = newURL.searchParams.get("search") || "coffee";
    // check if we have the data in the catch, if there, do not refetch again, directly give, else refetch again from the loader
    await queryCLient.ensureQueryData(searchCocktailQuery(searchTerm));
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));
  return (
    <>
      <SearchBar searchTerm={searchTerm}></SearchBar>
      <Cocktails drinks={drinks}></Cocktails>
    </>
  );
};

export default Landing;
