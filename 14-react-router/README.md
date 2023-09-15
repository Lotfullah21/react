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
