## Component

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:(`<html>`)

## Component Rules

1. It should start with capital letter
2. must return something
3. JSX syntax (return html)

## JSX Component Rules

1. Always return one parent element
2. Better to with semantics
3. There are some difference in naming between pure js and jsx.
   For instance,

```html
<div>
	<h1 class="title" onclick="myfunction()"></h1>
	<label for="name"></label>
	<input id="name" />
</div>
```

## JSX

```html
<div>
	<h1 className="title" vonClick="{myFunction}"></h1>
	<label htmlFor="name"></label>
	<input id="name" />
</div>
```

## Every elements should have a closing tag

```html
<input /> <img />
```

### Using JSX

```js
function Greeting() {
	return;
	<div>
		<h2>Hello</h2>;
	</div>;
}
```

### the Returning contents should be at the same line as return if we are not using the parenthesis.

## Fragment

It allows us to group elements without a parent element or extra nodes.

```js
function Greeting() {
	return;
	<React.Fragment>
		<h2>Hello</h2>;
	</React.Fragment>;
}
```

Or we can use just `<></>`

```js
function Greeting() {
	return;
	<>
		<h2>Hello</h2>;
	</>;
}
```

React is a javascript library and under the hood, it uses js functions to create elements, but JSX makes this creation simpler.

### Using normal functions

```js
function Greeting() {
	return React.createContext("h2", {}, "Hello");
}
```

### Using JSX

```js
function Greeting() {
	return <h2>Hello</h2>;
}
```

## How to create a component

1. Create a function

```js
function Greeting() {
	return <h2>Hello</h2>;
}
```

2. Export that function

```js
export default Greeting;
```

## Nested Component

```jsx
import ReactDOM from "react-dom/client";

function Greeting() {
	return (
		<>
			<h2>Hello</h2>
			<Subjects></Subjects>
			<Colleges></Colleges>
		</>
	);
}

const Subjects = () => {
	return (
		<ul>
			<li>Machine learning</li>
			<li>Deep learning</li>
		</ul>
	);
};

const Colleges = () => {
	return (
		<ul>
			<li>MIT</li>
			<li>Stanford</li>
		</ul>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting></Greeting>);
```

## Adding inline styles in component

The whole style is in the form of an object where the keys (properties) should be in camel case and the values should be inside a string.

```jsx
const Duration = () => {
	return <h4 style={{ color: "red", marginTop: "2rem" }}>4 Months</h4>;
};
const
```

##### Alternative

Write the styles inside an object and pass it.

```jsx
const Duration = () => {
	colorStyles = { color: "red", marginTop: "2rem" }
	return <h4 style={colorStyles}>4 Months</h4>;
};
const
```

### Javascript inside JSX

Add javascript code inside {}.
We can only pass expression, but not the statements.
expressions returns a value and statements does not.

```js
import ReactDOM from "react-dom/client";
import "./index.css";
const Courses = () => {
	return (
		<section className="section">
			<Course></Course>
			<Course></Course>
			<Course></Course>
			<Course></Course>
		</section>
	);
};

const Course = () => {
	return (
		<article className="course">
			<Image></Image>
			<Title></Title>
			<Duration></Duration>
		</article>
	);
};

const Image = () => {
	return (
		<img
			src="https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2024-06/Technical-Fundamentals-of-Generative-AI_XFM110.jpg?h=8abcec71&itok=2mIFkkVi"
			alt="machine learning"
		/>
	);
};

const Title = () => {
	return <h2>Artificial Intelligence</h2>;
};
const duration = "4 months";
const Duration = () => {
	return <h4>{duration}</h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Courses></Courses>);
```

```js



const Duration = () => {
	return (
		<div>
			<h4>{let x=3}</h4> // Wrong
			<h4>{3+5}</h4> // Correct
		</div>
	);
};
```
