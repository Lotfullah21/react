import { Link, useLoaderData, Navigate } from "react-router-dom";
import CocktailSinglePage from "../wrappers/CocktailSinglePage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// get the data using query
const singleCocktailQueryData = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${id}`);
      return data;
    },
  };
};

// get the id and check if the data is in cache.
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    // check if data is already in cache, if so, do not re-fetch again, else fetch the data.
    await queryClient.ensureQueryData(singleCocktailQueryData(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQueryData(id));
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: alcoholicInfo,
    strCategory: category,
    strInstructions: guides,
  } = singleDrink;

  const singleDrinkKeys = Object.keys(singleDrink);
  const singleDrinkIngredients = singleDrinkKeys.filter(
    // check for the keys that starts with "strIngredient" and the key value should not be null.
    (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
  );
  const singleDrinkIngredientsValues = singleDrinkIngredients.map(
    (key) => singleDrink[key]
  );

  return (
    <CocktailSinglePage>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
        <h1 style={{ fontSize: "1.4rem" }}>{name}</h1>
      </header>
      <div className="drink-card">
        <img src={img} alt={name} tabIndex="-1"></img>
        <div className="drink-info">
          <p>
            {" "}
            <span className="drink-data">name</span>
            <span className="comma">:</span>
            {name}
          </p>
          <p>
            {" "}
            <span className="drink-data">category</span>
            <span className="comma">:</span>
            {category}
          </p>
          <p>
            {" "}
            <span className="drink-data">alcoholicInfo</span>
            <span className="comma">:</span>
            {alcoholicInfo}
          </p>
          <p>
            <span className="drink-data">Ingredients</span>
            <span className="comma">:</span>
            {singleDrinkIngredientsValues.map((item, index) => (
              <span key={item}>
                <span>
                  {item}
                  {index < singleDrinkIngredients.length - 1 ? "," : ""}
                </span>
              </span>
            ))}
          </p>
          <p>
            {" "}
            <span className="drink-data">guides</span>
            <span className="comma">:</span>
            {guides}
          </p>
        </div>
      </div>
    </CocktailSinglePage>
  );
};

export default Cocktail;
