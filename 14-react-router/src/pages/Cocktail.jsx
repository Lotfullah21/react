import { Link, useLoaderData, Navigate } from "react-router-dom";
import CocktailSinglePage from "../wrappers/CocktailSinglePage";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${url}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { data } = useLoaderData();
  if (!data) return <Navigate to="/"></Navigate>;
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
  console.log(singleDrinkIngredients);

  return (
    <CocktailSinglePage>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
      </header>
      <div className="drink-card">
        <img src={img} alt={name}></img>
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
