## React Router:

React Router is a widely used library for handling routing and navigation in React applications. It allows us to create single-page applications (SPAs) where different components or pages are displayed based on the URL without causing a full page reload.

##### Installation

```sh
npm install react-router-dom
```

```sh
npm install react-router-dom
npm install react-toastify react-icons @tanstack/react-query
npm i styled components

```

## Single page application(SPA):

A web application that operates within a single `html` page and the content is dynamically reloading without requiring a full page reload.

It loads and update the necessary data and react router helps us in achieving this.

With each request, we are not handling the routing in backend, but we are doing it in front end unlike pure `html` pages where for each request, the necessary data should come from the server.

n React, the entire app is loaded inside a single div, you're not actually visiting different pages, and Different views are rendered when React makes changes to the Virtual DOM, with React updating the real DOM accordingly.

### How SPAs work?

When the user navigates to the web application in the browser, the Web Server will return the necessary resources to run the application. There are two approaches to serving code and resources in Single Page Applications.

### 1. Bundling

When the browser requests the application, return and load all necessary HTML, CSS and JavaScript immediately. This is known as bundling.

### 2. Lazy loading

When the browser requests the application, return only the minimum HTML, CSS and JavaScript needed to load the application. Additional resources are downloaded as required by the application, for example, when a user navigates to a specific section of the application. This is known as lazy loading or code splitting.

Instead of loading new HTML pages for each route, the app dynamically updates the content inside that single `<div>` (commonly id="root"). React handles routing, state management, and rendering views within this container.

### Virtual DOM:

React uses a Virtual DOM, which is an in-memory representation of the actual DOM. Whenever the state or props change in the app, React renders the necessary components to the Virtual DOM first.

### Reconciliation:

React compares the updated Virtual DOM with the previous one, determining what has actually changed. This process is called reconciliation.

### Efficient DOM Updates:

After identifying the differences, React updates only the parts of the real DOM that have changed, ensuring minimal performance overhead. This prevents a full page reload, making interactions fast and efficient.

## Routing in SPAs:

Even though you're technically on the same page, libraries like React Router allow for the simulation of navigation between different "pages" or views. The URL may change, but the actual page doesn't reload; React simply renders the appropriate components for that route.

## Basic Components

`BrowserRouter`: This component should wrap your entire application and is responsible for providing routing functionality. It uses the HTML5 History API to keep the UI in sync with the URL.

`Route`: This component is used to render a UI component based on the current URL. You specify a path prop to match the URL, and when there's a match, the component is rendered.

```js
import { Link } from "react-router-dom";
```

##### Initial setup

```js
import { useState } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const customRouter = createBrowserRouter([
	{ path: "/", element: <h1>Home</h1> },
	{
		path: "/contact",
		element: (
			<div>
				<p>ph number: +9203212323</p>
				<p>name: ahmad</p>
			</div>
		),
	},
]);

function App() {
	return <RouterProvider router={customRouter}></RouterProvider>;
}

export default App;
```

### Using link

`Link`: This is a component used for navigation. It creates an anchor tag `(<a>)` that, when clicked, changes the URL without causing a full page reload.

it is designed to work in our project only, if we want to add external links we have to use anchor tags `<a href="some where outside">`.

```js
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<a href="www.hooshmandlab.com">
```

#### Active Links:

React Router also provides a way to style links as "active" when they match the current URL. You can use the NavLink component for this purpose:

```js
import { NavLink } from "react-router-dom";
<NavLink to="/about" activeClassName="active-link"></NavLink>;
```

## Nested Route

in the below custom routes, we have `</HomeLayOut>` as parent component and other components as child component.

```js
{
index: true,
element: <Landing></Landing>,
},
```

`Landing` component is our home page Route.
`HomeLayout` is our component structure where with the help of `Outlet` we have shared components across all components. In fact it is not a page, but a place to put all common layouts.

by putting `index:true`, here we want this page to be our home page once we navigate back to the `/` home route.

```js
const customRouter = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayOut></HomeLayOut>,
		children: [
			{
				index: true,
				element: <Landing></Landing>,
			},
			{
				path: "cocktail",
				element: <Cocktail></Cocktail>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
			{
				path: "error",
				element: <Error></Error>,
			},
		],
	},
]);
```

## Note:

error component will not be included in the styles we are setting for outlet, Hence we need to set the styles separately.

## Outlet

The "outlet" itself is typically represented by a special component that acts as a placeholder for the content of child routes. This component is where the content for each route gets injected.
share the UI present in the `HomeLayout` to every child of the `HomeLayout` which we have provided in `HomeLayout` children.
for instance, we want the navbar and footer to be injected in every page, Hence outlet can be used here to inject these to component to every child of HomeLayOut which is the parent in the app component.

```js
import { Outlet } from "react-router-dom";
const HomeLayOut = () => {
	return (
		<div>
			<header></header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer></footer>
		</div>
	);
};
export default HomeLayOut;
```

## Centering the elements

If you want center a few elements, put them in a div and use either flex or grid layout to put them all together beautifully in the center.

## Fetching data

general setup for fetching external data.

````js

```js
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
````

```jsx
const fetchingData = async () => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

useEffect(() => {
	fetchingData();
}, []);
```

using `useEffect` hook, We fetch the data after initial rendering

### rendering ?

In the context of web development and user interfaces, rendering refers to the process of generating and displaying the visual representation of a component or a page on the user's screen. It involves converting the structured data and layout instructions of a web page or application into a format that can be presented to the user, typically as a combination of HTML, CSS, and sometimes JavaScript.

What if we want to provide the data before the initial render? that is what loader is for.

## Loader

A function provided by `react-router-dom` to provide the data to the route element before it renders, It is doing prefetching.

##### Note

From this function, something has to be returned, even null; otherwise we will get error.

```js
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
	return "x";
};

const Landing = () => {
	const data = useLoaderData();
	return <div>Landing</div>;
};
export default Landing;
```

Go to Home page and add the loader to the `loader` property of the page you are fetching the data from, in this particular case `Landing page.`

```js
import { loader as LandingLoader } from "./pages/Landing";
{ path: "landing", loader:LandingLoader, element: <Landing></Landing> },
```

## Summary

Whatever data is returned from the loader, it will be available at the route we added the `loader` function.

## Destructuring

Look how destructuring works here

When directly destructuring, the property name should be on the left side and its alias on right.
When returning and aliasing, the property should be or right and alias on left

```js
const formattedDrinks = drinks.map((drink) => {
const {
	idDrink,
	strDrink: name,
	strDrinkThumb,
	strAlcoholic,
	strCategory,
} = drink;
console.log(idDrink);
return {
	id: idDrink,
	name,
	imgSrc: strDrinkThumb,
	info: strAlcoholic,
	glass: strCategory,
}}
```

## Single Cocktail

Inside our loader function's parameter, we will be having access to the information of the source link, like from where each request is coming, what are the ids and so on.

```js
Cocktail.jsx;

export const loader = async ({ params }) => {
	const { id } = params;
	console.log(id);
	return "X";
};
```

```jsx
		{
				path: "cocktail/:iddddd",
				element: <Cocktail></Cocktail>,
				loader: singleCocktailLoader,
				errorElement: <SinglePageError></SinglePageError>,
			},
```

`path: "cocktail/:iddddd"`, whatever you have specified after `/`, that will be in our params object.

We passed this `id` through `CocktailCard` component.

```js
<Link to={`/cocktail/${id}`} className="btn">
	detail
</Link>
```

```jsx
export const loader = async ({ params }) => {
	const { iddddd } = params;
	const response = await axios.get(`${singleCocktailUrl}${iddddd}`);
	console.log(response, iddddd);
	return "X";
};
```

To access the data returned from loader.

```jsx
const { data, id } = useLoaderData();
```

```js
import CocktailCard from "./CocktailCard";

const Cocktails = ({ drinks }) => {
	return (
		<div>
			{drinks.map((drink) => {
				const { idDrink } = drink;
				console.log(idDrink);
				return <CocktailCard key={idDrink} {...drink}></CocktailCard>;
			})}
		</div>
	);
};
export default Cocktails;
```

```js
const CocktailCard = ({
	strDrink,
	strCategory,
	strImageSource,
	strInstructions,
	strAlcoholic,
}) => {
	return (
		<div className="cocktail-card">
			<h2>{strDrink}</h2>
			<p>Category: {strCategory}</p>
		</div>
	);
};

export default CocktailCard;
```

or

```js
const CocktailCard = (props) => {
	const {
		strDrink,
		strCategory,
		strImageSource,
		strInstructions,
		strAlcoholic,
	} = props;

	return (
		<div className="cocktail-card">
			<h2>{strDrink}</h2>
			<p>Category: {strCategory}</p>
		</div>
	);
};
```

## Note

when you are destructuring the property, to use them in child component, you can use the properties in two ways,
either pass the entire object and use dot notation or destructure them right away.
2nd way is to destructure the properties in component parameters.

`const CocktailCard = ({
  strDrink,
  strCategory,
  strImageSource,
  strInstructions,
  strAlcoholic,
}) `

`{...drink}` we used pass all of the drinks properties to the `<CocktailCard>` instead of passing them individually.

if we did not use `{...drink}` we had to do this

```js
return (
	<CocktailCard
		key={idDrink}
		strDrink={strDrink}
		strCategory={strCategory}
		strImageSource={strImageSource}
		strInstructions={strInstructions}
		strAlcoholic={strAlcoholic}></CocktailCard>
);
```

or if

```js
return <CocktailCard key={idDrink} drink={drink}></CocktailCard>;
```

then

```js
import React from "react";

const CocktailCard = ({ dirnk }) => {
	// Destructure the properties of the dirnk prop
	const {
		strDrink,
		strCategory,
		strImageSource,
		strInstructions,
		strAlcoholic,
	} = dirnk;

	return (
		<div className="cocktail-card">
			<h2>{strDrink}</h2>
			<p>Category: {strCategory}</p>
		</div>
	);
};
export default CocktailCard;
```

### **useNavigation**

```js
import { Outlet, useNavigation } from "react-router-dom";
const navigation = useNavigation();
```

it provides useful information about the state of our application.
"state" generally refers to the current condition or status of a component or application.

`Idle`: The application is not actively processing or waiting for anything. It's typically in a standby state.

`Loading`: The application is actively fetching data or performing an operation. It's waiting for data or resources to become available.

`Error`: An error or exception has occurred, and the application is in an error state. This state might include error messages or UI elements to handle errors.

`Success`: The application has successfully completed a task or operation. This state might indicate that data has been retrieved successfully or an action has been completed without errors.

`Active`: The application is actively engaged in user interactions or performing some task.

### Form

When submitting the form, handle the errors yourself and avoid the rendering of the error.

### Object.keys()

Object.keys() is a built-in JavaScript method that allows you to extract the keys (property names) of an object and return them as an array.

```js
const keysArray = Object.keys(object);
const person = {
	name: "Ahmad",
	age: 30,
};
const keys = Object.keys(person);
console.log(keys); // ahmad, 30
```

## Ingredients

```js
const singleDrink = data.drinks[0];
const singleDrinkKeys = Object.keys(singleDrink);
const singleDrinkIngredients = singleDrinkKeys.filter(
	// check for the keys that starts with "strIngredient" and the key value should not be null.
	(key) => key.startsWith("strIngredient") && singleDrink[key] !== null
);
const singleDrinkIngredientsValues = singleDrinkIngredients.map(
	(key) => singleDrink[key]
);
```

## formData()

It is actually a built-in JavaScript object that is used to create and manage HTML form data in a format that can be easily sent to a server via HTTP requests, typically in the context of sending POST requests.

n

Object.fromEntries is a JavaScript method introduced in ECMAScript 2019 (ES10) that allows you to convert an iterable (like an array of key-value pairs) into an object.

`disabled`: The disabled attribute is a standard HTML attribute used with form input elements, such as text fields, buttons, checkboxes, and others. Its role is to disable user interaction with the input element when its value is set to true, and enable interaction when set to false or not present. In this case, the disabled attribute is conditionally set based on the value of the isSubmitting variable.

our landing page without react-query

```js
import { useLoaderData } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Cocktails from "../components/Cocktails";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader = async ({ request }) => {
	// construct a new url from the request url
	const newURL = new URL(request.url);
	// from the url, retrieve the "search" key parameter
	const searchTerm = newURL.searchParams.get("search") || "coffee";
	// add the search one to our request
	const response = await axios.get(`${url}${searchTerm}`);
	const drinks = response.data.drinks;
	return { drinks, searchTerm };
};
const Landing = () => {
	const { drinks, searchTerm } = useLoaderData();
	return (
		<>
			<SearchBar searchTerm={searchTerm}></SearchBar>
			<Cocktails drinks={drinks}></Cocktails>
		</>
	);
};

export default Landing;
```

## Crucial

drinks is undefined helped you resolve the issue. Data fetching in asynchronous applications can sometimes lead to situations where data is not available instantly, and adding conditional checks like the one you implemented is a good practice to ensure your components handle such scenarios gracefully.

important to have the bellow snippet condition as our operation is asynchronous, especially using `useQuery`

## React Query

Every time we are opening a page, we are making a request? why not cache the request so that the next we open the same file, we directly use the cached data.

We cannot invoke hooks inside a function (loader).

How to pass the `useQuery` to loader? Pass it from parent (App.jsx)

```js
import { Link, useLoaderData, Navigate } from "react-router-dom";
import CocktailSinglePage from "../wrappers/CocktailSinglePage";
import axios from "axios";
import { useQuery } from "react-query";
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
		// await queryClient.ensureQueryData(singleCocktailQueryData(id));
		return { id };
	};
```

```js
const Cocktail = () => {
	const { id } = useLoaderData();
	const { data } = useQuery(singleCocktailQueryData(id));

	const singleDrink = data.drinks[0];

	const singleDrinkKeys = Object.keys(singleDrink);
	const singleDrinkIngredients = singleDrinkKeys.filter(
		// check for the keys that starts with "strIngredient" and the key value should not be null.
		(key) => key.startsWith("strIngredient") && singleDrink[key] !== null
	);
	const singleDrinkIngredientsValues = singleDrinkIngredients.map(
		(key) => singleDrink[key]
	);

	return <CocktailSinglePage></CocktailSinglePage>;
};

export default Cocktail;
```
