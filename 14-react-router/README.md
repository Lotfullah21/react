## React Router:

React Router is a widely used library for handling routing and navigation in React applications. It allows you to create single-page applications (SPAs) where different components or pages are displayed based on the URL without causing a full page reload.

##### Installation

```python
npm install react-router-dom
```

#### Basic Components

BrowserRouter: This component should wrap your entire application and is responsible for providing routing functionality. It uses the HTML5 History API to keep the UI in sync with the URL.

Route: This component is used to render a UI component based on the current URL. You specify a path prop to match the URL, and when there's a match, the component is rendered.

Link: This is a component used for navigation. It creates an anchor tag (<a>) that, when clicked, changes the URL without causing a full page reload.
it is designed to work in our project only, if we want to add external links we have to use anchor tags <a>.

```js
import { Link } from "react-router-dom";
```

using link

```js
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<a href="www.come">
```

Active Links:

React Router also provides a way to style links as "active" when they match the current URL. You can use the NavLink component for this purpose:

```js
import { NavLink } from "react-router-dom";

<NavLink to="/about" activeClassName="active-link"></NavLink>;
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

### Nested Route

in the below custom routes, we have `</HomeLayOut>` as parent component and other components as child component.

```js
{
index: true,
element: <Landing></Landing>,
},
```

`Landing` component is our home page Route.
`HomeLayout` is our component structure where with the help of `Outlet` we have shared components across all components.

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

#### Note:

error component will not be included in the styles we are setting for outlet, Hence we need to set the styles separately.

### Outlet

The "outlet" itself is typically represented by a special component that acts as a placeholder for the content of child routes. This component is where the content for each route gets injected.
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

#### Fetching data

general setup for fetching external data.

```js
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

using `useEffect` hook, we need to first fetch data and then render to the page.

##### rendering

In the context of web development and user interfaces, rendering refers to the process of generating and displaying the visual representation of a component or a page on the user's screen. It involves converting the structured data and layout instructions of a web page or application into a format that can be presented to the user, typically as a combination of HTML, CSS, and sometimes JavaScript.

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
    strAlcoholic={strAlcoholic}
  ></CocktailCard>
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
