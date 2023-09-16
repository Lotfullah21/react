import { useLoaderData } from "react-router-dom";
import Cocktails from "../components/Cocktails";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const search = "";
  const response = await axios.get(`${url}${search}`);
  const drinks = response.data.drinks;
  return { drinks, search };
};
const Landing = () => {
  const { drinks, search } = useLoaderData();
  console.log(drinks);
  return (
    <>
      <Cocktails drinks={drinks}></Cocktails>
    </>
  );
};

export default Landing;
