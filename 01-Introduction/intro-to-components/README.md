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

## Props

Usually, for each component we need to pass different data and the way to do that is through properties.
Properties are objects and every component at the moment of creation gets one.

```jsx
const Title = (props) => {
	console.log(props); // Object;
	return <h2>Artificial Intelligence</h2>;
};
```

```jsx
const Courses = () => {
	return (
		<section className="section">
			<Course name="machine learning"></Course>
			<Course name="deep learning" language="Farsi"></Course>
		</section>
	);
};

const Course = (props) => {
	return (
		<article className="course">
			<Image></Image>
			<Title></Title>
			<Duration></Duration>
			<h3>{props.name}</h3>
			<h4>{props.language}</h4>
		</article>
	);
};
```

For the components we do no have the props properties, nothing will be rendered.

```jsx
import ReactDOM from "react-dom/client";
import "./index.css";

const img = "./images/ai.jpg";
const name = "machine learning";
const duration = "4 months";
const Courses = () => {
	return (
		<section className="section">
			<Course img={img} name={name} duration={duration}></Course>
			<Course img={img} name={name} duration={duration}></Course>
		</section>
	);
};

const Course = (props) => {
	return (
		<article className="course">
			<img src={props.img} />
			<h2>{props.name}</h2>
			<h3>{props.duration}</h3>
		</article>
	);
};
```

## Props dynamic

```jsx
const firstSubject = {
	name: "machine learning",
	duration: "4 months",
	img: "./images/ai.jpg",
};

const secondSubject = {
	name: "Python",
	duration: "2 months",
	img: "./images/py.jpg",
};

const Courses = () => {
	return (
		<section className="section">
			<Course
				img={firstSubject.img}
				name={firstSubject.name}
				duration={firstSubject.duration}></Course>
			<Course
				img={secondSubject.img}
				name={secondSubject.name}
				duration={secondSubject.duration}></Course>
		</section>
	);
};

const Course = (props) => {
	return (
		<article className="course">
			<img src={props.img} />
			<h2>{props.name}</h2>
			<h3>{props.duration}</h3>
		</article>
	);
};
```

## Accessing Props

### 1. Using destructuring

```jsx
const Courses = () => {
	return (
		<section className="section">
			<Course
				img={firstSubject.img}
				name={firstSubject.title}
				duration={firstSubject.duration}></Course>
			<Course
				img={secondSubject.img}
				name={secondSubject.title}
				duration={secondSubject.duration}></Course>
		</section>
	);
};

const Course = (props) => {
	const { img, name, duration } = props;
	return (
		<article className="course">
			<img src={img} />
			<h2>{name}</h2>
			<h3>{duration}</h3>
		</article>
	);
};
```

### 2. Directly destructuring

```jsx
const Courses = () => {
	return (
		<section className="section">
			<Course
				img={firstSubject.img}
				name={firstSubject.title}
				duration={firstSubject.duration}></Course>
			<Course
				img={secondSubject.img}
				name={secondSubject.title}
				duration={secondSubject.duration}></Course>
		</section>
	);
};

const Course = ({ img, name, duration }) => {
	return (
		<article className="course">
			<img src={img} />
			<h2>{name}</h2>
			<h3>{duration}</h3>
		</article>
	);
};
```

## Children prop

Anything that comes between the tags of component is known as children and can be accessed using `{children}`.

A special prop that is provided by react, we can place it any in our components, note that it can be only accessed through children prop.

```jsx
const Courses = () => {
	return (
		<section className="section">
			<Course
				img={firstSubject.img}
				name={firstSubject.title}
				duration={firstSubject.duration}>
				<h2>Hello World, I am from children props</h2>
			</Course>
			<Course
				img={secondSubject.img}
				name={secondSubject.title}
				duration={secondSubject.duration}></Course>
		</section>
	);
};

const Course = (props) => {
	const { img, name, duration, children } = props;
	return (
		<article className="course">
			<img src={img} />
			<h2>{name}</h2>
			{children}
			<h3>{duration}</h3>
		</article>
	);
};
```

## Map method

We cannot render objects directly in react, but we can render arrays

in plain javascript.

```js
const names = ["AI", "ML", "PY"];
const newNames = names.map((name) => {
	return `<h1>${name}</h1>`;
});

console.log(newNames); // object array: ["<h1>AI</h1>","<h1>ML</h1>","<h1>PY</h1>"]
```

In jsx.

```jsx
const names = ["AI", "ML", "PY"];
const newNames = names.map((name) => {
	return <h1>{name}</h1>;
});
console.log(newNames); //[{props: {children: 'AI'},{props: {children: 'ML'},{props: {children: 'PY'}]
// We will be having three different objects and the values will be attached to children property.
```

Now, we will be having sections with three different headings.

```js
const names = ["AI", "ML", "PY"];
const newNames = names.map((name) => {
	return <h1>{name}</h1>;
});
console.log(newNames);
const Courses = () => {
	return <section className="section">{newNames}</section>;
};
```

## Passing the entire object to a component

Pass the entire object and destructure it in other components.

## Option-1

```jsx
const Courses = () => {
	return (
		<section className="section">
			{subjects.map((subject) => {
				return <Course course={subject} key={subject.id}></Course>;
			})}
		</section>
	);
};

const Course = (props) => {
	const { img, title, duration, children } = props.course;
	return (
		<article className="course">
			<img src={img} />
			<h2>{title}</h2>
			{children}
			<h3>{duration}</h3>
		</article>
	);
};
```

## Option-2: Destructure it directly in props

```js

const Course = ({ course: { img, title, duration } }) =>
```

```js
const Courses = () => {
	return (
		<section className="section">
			{subjects.map((subject) => {
				return <Course course={subject} key={subject.id}></Course>;
			})}
		</section>
	);
};

const Course = ({ course: { img, title, duration } }) => {
	return (
		<article className="course">
			<img src={img} />
			<h2>{title}</h2>
			<h3>{duration}</h3>
		</article>
	);
};
```

## OPtion-3: Using Spread operator

Using spread operator, we can pass the entire object and have access to each individual elements of the object we used spread operator on.
Basically, using spread operator we can create a copy of iterable objects like arrays and objects.

It eliminates the need of writing individual properties.

```js
const x = [1, 2, 4];
const newX = [...x]; // [1,2,4]
```

```js
const Courses = () => {
	return (
		<section className="section">
			{subjects.map((subject) => {
				return <Course {...subject} key={subject.id}></Course>;
			})}
		</section>
	);
};

const Course = ({ img, title, duration }) => {
	return (
		<article className="course">
			<img src={img} />
			<h2>{title}</h2>
			<h3>{duration}</h3>
		</article>
	);
};
```

## Key prop

the key prop is a special attribute you need to include when creating lists of elements. The key prop is used to help React identify which items have changed, are added, or are removed, thus optimizing the rendering process. Keys should be given to the elements inside the array to give the elements a stable identity

```JSX

const subjects = [
	{
		title: "machine learning",
		duration: "4 months",
		img: "./images/ai.jpg",
		id: 1,
	},

	{
		title: "Python",
		duration: "2 months",
		img: "./images/py.jpg",
		id: 2,
	},
];

const Courses = () => {
	return (
		<section className="section">
			{subjects.map((subject) => {
				const { title, duration, img, id } = subject;
				return (
					<Course img={img} title={title} duration={duration} key={id}></Course>
				);
			})}
		</section>
	);
};

const Course = (props) => {
	const { img, name, duration, children } = props;
	return (
		<article className="course">
			<img src={img} />
			<h2>{name}</h2>
			{children}
			<h3>{duration}</h3>
		</article>
	);
};
```

## Events

Based on user behavior, we want some sort of response to happen.

src:"https://react.dev/learn/responding-to-events"

### Three main events.

1. onClick (click events)
2. onSubmit (submit events)
3. onChange (change events)

## Crucial for forms

By default, whenever we click on a button inside a form, it sends the data to an external server even if we do not specify the path.

To prevent this behavior, we can write `e.preventDefault()` inside `onSubmitHandler`.

```js
const HandleEvents = () => {
	const handleInput = () => {
		console.log("handle input");
	};
	const handleButton = () => {
		alert("Hello from button");
	};
	const handleFormSubmission = () => {
		console.log("form submitted");
	};

	return (
		<section>
			<form onSubmit={handleFormSubmission}>
				<h1>Form handler</h1>
				<input type="text" onChange={handleInput}></input>
				<button onClick={handleInput}>submit</button>
			</form>
		</section>
	);
};
```

#### Adding e.preventDefault()

```js
const HandleEvents = () => {
	const handleInput = () => {
		console.log("handle input");
	};
	const handleButton = () => {
		alert("Hello from button");
	};
	const handleFormSubmission = (e) => {
		e.preventDefault();
		console.log("form submitted");
	};

	return (
		<section>
			<form onSubmit={handleFormSubmission}>
				<h1>Form handler</h1>
				<input type="text" onChange={handleInput}></input>
				<button onClick={handleInput}>submit</button>
			</form>
		</section>
	);
};
```

## Types of button (HTML)

```jsx
<section>
	<form onSubmit={handleFormSubmission}>
		<h1>Form handler</h1>
		<input type="text" onChange={handleInput}></input>
		<button onClick={handleInput}>submit</button>
		<button onClick={handleInput} type="button">
			submit
		</button>
	</form>
</section>
```

1. If we add the attribute of `type="button"`, we cannot submit the form using this buttton.

```jsx
<button onClick={handleInput} type="button">
	submit
</button>
```

2. We can submit the form and add form handler function inside a button with `type="submit"`.

```jsx
<button onClick={handleFormSubmission} type="submit">
	submit
</button>
```

```js
<section>
	<form>
		<h1>Form handler</h1>
		<input type="text" onChange={handleInput}></input>
		<button onClick={handleFormSubmission}>submit</button>
	</form>
</section>
```

# Props Drilling

By default, Data can only be passed from top to bottom, not the other way around.


