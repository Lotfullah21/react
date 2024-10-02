## React Router

A library that gives more control over routing of components.

### How to work with react router

1. Install the library

```sh
`npm i react-router-dom`
```

2. Wrap entire application around `BrowseRouter`

# BrowserRouter:

The BrowserRouter component serves as the foundation of React Router, leveraging the HTML5 history API to synchronize the application's UI with the URL. By intercepting URL changes, BrowserRouter enables seamless navigation without triggering full-page reloads.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
```

1. Define Specific routes using `<Route>` component and place them inside `<Routes>` component, each `<Route>` component should have at least two properties, `path` and `element`.

## Route:

Routes define the mapping between specific URL paths and the corresponding React components to be rendered. By associating components with specific URLs, developers can create a hierarchical structure that mirrors the application's navigation flow.

## Link:

Links facilitate navigation within the application by generating anchor tags with appropriate URLs. By leveraging Link components instead of traditional anchor tags, developers can ensure that navigation occurs within the confines of the React Router environment, preserving the SPA paradigm.

#### path

It determines what should be the name of the route

#### element

It determines for that particular path, which component should be rendered.

`./Navbar.jsx`

```jsx
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";

const Navbar = () => {
	return (
		<nav className="navbar">
			<a href="#">home</a>
			<a href="#">about</a>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/about" element={<About></About>}></Route>
			</Routes>
		</nav>
	);
};
export default Navbar;
```

Now, we can navigate to the given paths and only the components specific to that route placed at the element property will be rendered.

How to make them dynamic so that by clicking on nav elements, we should be able to navigate.

#### Crucial

Always, handle the routing inside the main component `<App>`

`./App.jsx`

```jsx
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/about" element={<About></About>}></Route>
			</Routes>
		</>
	);
}

export default App;
```

React dynamically changes the web pages contents.
When a react website is changing from home page to about page, it is not going to a new page, it renders a different component.

## webpack

webpack builds a dependency graph and bundles modules into one or more files that a browser can consume.

- It converts modern JS code - which can only be understood by modern browsers - into older versions of JavaScript so that older browsers can understand your code. This process is known as transpiling. For example, you can transpile ES7 code to ES5 code using webpack.

It optimizes your code to load as quickly as possible when a user visits your web pages.

- It can process your SCSS code into the regular CSS, which browsers can understand.

- It can build source maps of the bundle's building blocks

- It can produce various kinds of files based on rules and templates. This includes HTML files, among others.

It helps you achieve this using two modes: production mode or development mode.

In development mode, webpack bundles your files and optimizes your bundles for updates - so that any updates to any of the files in your locally developed app are quickly re-bundled. It also builds source maps so you can inspect the original file included in the bundled code.

In production mode, webpack bundles your files so that they are optimized for speed. This means the files are minified and organized to take up the least amount of memory. So, they are optimized for speed because these bundles are fast to download when a user visits the website online.

Once all the source files of your app have been bundled into a single bundle file, then that single bundle file gets served to a visitor browsing the live version of your app online, and the entire app’s contents get served at once.

This works great for smaller apps, but if you have a more extensive app, this approach is likely to affect your site’s speed. The longer it takes for a web app to load, the more likely the visitor will leave and move on to another unrelated website. There are several ways to tackle this issue of a large bundle.

One such approach is `code-splitting`, a practice where a module bundler like webpack splits the single bundle file into multiple bundles, which are then loaded on an as-needed basis. With the help of code-splitting, you can `lazy load` only the parts that the visitor to the app needs to have at any given time. This approach significantly reduces the download times and allows React-powered apps to get much better speeds.

Mounting is the process of rendering a component for the first time and attaching it to the DOM (Document Object Model).

##### When a component is mounted:

- Its lifecycle begins.
- The component's constructor is called (if defined).
- componentDidMount is a common lifecycle method in class components that runs once the component is fully rendered and attached to the DOM.

## Client Side Rendering:

#### User Requests the Website:

When a user navigates to your website, their browser sends an HTTP request to the server asking for the content.

#### Server Responds with index.html:

The server responds by sending back the index.html file. In client-side rendering, this index.html is usually a very minimal file that contains a basic HTML structure and a `<div>` with an ID like #root where React will mount the app.

#### Browser Downloads JavaScript Bundles:

After receiving the index.html, the browser parses it and finds the references to the bundled JavaScript files that were created by your React build process (e.g., main.js, vendor.js). These files contain your React app's logic.

#### React Takes Over in the Browser:

The browser downloads and executes these JavaScript files. React then takes over and renders the components dynamically into the #root element of the index.html file.

In SSR, the HTML is already rendered by the server, so the browser can display it immediately

## NavLink

`<NavLink>` is provided by the library and it provides many useful properties, one of them is `isActive`.

If the link is active (i.e., the current URL matches the NavLink destination), it returns a style object that sets the text color to red.

```jsx
const getStyle = ({ isActive }) => {
	return { color: isActive ? "red" : "" };
};

<nav className="navbar">
	<NavLink style={getStyle} to="/">
		home
	</NavLink>
	<NavLink style={getStyle} to="/about">
		about
	</NavLink>
	<NavLink style={getStyle} to="/courses">
		courses
	</NavLink>
</nav>;
```

Link: Pure navigation, no active state styling. Simple and efficient.
NavLink: Adds functionality to style or apply classes when the link matches the current route. Perfect for indicating the active page.

## Programmatically navigating

Based on some event, we can navigate to different pages using `useNavigate` hook.
It returns a function and inside that function, we pass the path we want to navigate to.

```jsx
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const getStyle = ({ isActive }) => {
		return { color: isActive ? "red" : "" };
	};
	// Get the function
	const navigate = useNavigate();
	const handleNavigation = () => {
		// Pass the route
		navigate("/courses");
	};
	return (
		<nav className="navbar">
			<NavLink style={getStyle} to="/">
				home
			</NavLink>

			<button onClick={handleNavigation}>go to courses</button>
		</nav>
	);
};
export default Navbar;
```

## Protected Route

To have a protected route, we need to pass the page to be protected as the children to the private component.

- Create another component, `./ProtectedRoute`
- Create a context provider so that, the status of the user is known.
- Inside the routes, wrap the component you want to protect around the `ProtectedRoute`
- Inside the `ProtectedRoute`, we have access to the entire wrapped component using children prop and handle the logic there.

`./ProtectedRoute`

```jsx
import { useAuthContext } from "../context/auth-context";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
	const { loggedIn } = useAuthContext();

	return loggedIn ? children : <Navigate to="/login"></Navigate>;
};
```

`./context/auth-context.jsx`

```jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthContextProvider;
```

`./App.jsx`

```jsx
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>

				<Route
					path="/cart"
					element={
						<ProtectedRoute>
							<Cart></Cart>
						</ProtectedRoute>
					}></Route>
			</Routes>
		</>
	);
}

export default App;
```
