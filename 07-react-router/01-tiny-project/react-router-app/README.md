## React Router

A library that gives more control over routing of components.

### How to work with react router

1. Install the library

```sh
`npm i react-router-dom`
```

2. Wrap entire application around

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

3. Define Specific routes using `<Route>` component and place them inside `<Routes>` component, each `<Route>` component should have at least two properties, `path` and `element`.

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

One such approach is code-splitting, a practice where a module bundler like webpack splits the single bundle file into multiple bundles, which are then loaded on an as-needed basis. With the help of code-splitting, you can lazy load only the parts that the visitor to the app needs to have at any given time. This approach significantly reduces the download times and allows React-powered apps to get much better speeds.

## Client Side Rendering:

#### User Requests the Website:

When a user navigates to your website, their browser sends an HTTP request to the server asking for the content.

#### Server Responds with index.html:

The server responds by sending back the index.html file. In client-side rendering, this index.html is usually a very minimal file that contains a basic HTML structure and a <div> with an ID like #root where React will mount the app.

#### Browser Downloads JavaScript Bundles:

After receiving the index.html, the browser parses it and finds the references to the bundled JavaScript files that were created by your React build process (e.g., main.js, vendor.js). These files contain your React app's logic.

#### React Takes Over in the Browser:

The browser downloads and executes these JavaScript files. React then takes over and renders the components dynamically into the #root element of the index.html file.

In SSR, the HTML is already rendered by the server, so the browser can display it immediately
