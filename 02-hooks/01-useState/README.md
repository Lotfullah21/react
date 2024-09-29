# React `useState` Guide

## Table of Contents

- [React `useState` Guide](#react-usestate-guide)
  - [Table of Contents](#table-of-contents)
  - [State](#state)
  - [Use State](#use-state) - [Getting the values](#getting-the-values)
    - [1. Using indexing](#1-using-indexing)
    - [2. Destructuring](#2-destructuring)
    - [Updating object's states](#updating-objects-states)
      - [Another way](#another-way)
    - [Local State](#local-state)
    - [Initial Render](#initial-render)
      - [Re-Render](#re-render)
    - [General Rules of Hooks](#general-rules-of-hooks)
  - [Use State Array](#use-state-array)
    - [Filter method](#filter-method)
    - [Batching](#batching)
      - [Update:](#update)
  - [Few good shortcuts](#few-good-shortcuts)
    - [General Rule](#general-rule)

## State

It is a place holder unlike traditional variables, it is able to preserve the state during re-renders and with the change of this state value, entire view port will be reprinted.

## Use State

In React,It is a function and it is to manage state within functional components. It allows you to add stateful behavior to your components without the need to convert them into class components. Here's how you can use the useState hook:

In your functional component, declare state variables using the useState hook. The hook returns an array with two elements:

- the current state value
- a function to update that value.

Or a default value and a function to control that value.

Updating the state causes the component to re-render or reprint.

#### Getting the values

```js
import { useState } from "react";
const HelloState = () => {
	console.log(useState()); // [undefined, f]
	console.log(useState(``)); // [1, f]
};
```

`undefined` is the initial value and `f` is the function to control that value.
Same goes with ` console.log(useState(``)); // [1, f] `, but here the initial value is 1 or state value is 1.

### 1. Using indexing

As it is returning an array, we can directly destructure it or use indexing to get access to the state value and the function.

```js
import { useState } from "react";
const HelloState = () => {
	// The value lives in 0th index and function in first index.
	console.log(useState(1)[0]); //1
	console.log(useState(1)[1]); //  ƒ dispatchSetState(fiber, queue, action) {
};
```

OR

```js
import { useState } from "react";

const HelloState = () => {
	const stateFn = useState(0);
	console.log("state ", stateFn);
	console.log("state value", stateFn[0]); // state value
	console.log("state function", stateFn[1]); // state function
};
```

### 2. Destructuring

We use array destructuring to have freedom of giving names of our choice to the returned values from the hook, otherwise, if ues object destructuring, the names should match to the values we destructure.

```jsx
const [value, setValue] = useState(0);
```

In fact, we are storing the value of the state in `value` variable and the function to control it in `setValue`.

### Updating object's states

```jsx
import { useState } from "react";

export default function App() {
	const [greeting, setGreeting] = useState({ greet: "Hello, World" });
	console.log(greeting, setGreeting);

	function updateGreeting() {
		setGreeting({ greet: "Hello, World-Wide Web" });
	}

	return (
		<div>
			<h1>{greeting.greet}</h1>
			<button onClick={updateGreeting}>Update greeting</button>
		</div>
	);
}
```

While this works, it's not the recommended way of working with state objects in React, this is because the state object usually has more than a single property, and it is costly to update the entire object just for the sake of updating only a small part of it.

The suggested approach for updating the state object in React when using useState is to copy the state object and then update the copy.

This usually involves using the spread operator (...).

```jsx
import { useState } from "react";

export default function App() {
	const [greeting, setGreeting] = useState({ greet: "Hello, World" });
	console.log(greeting, setGreeting);

	function updateGreeting() {
		const newGreeting = { ...greeting };
		newGreeting.greet = "Hello, World-Wide Web";
		setGreeting(newGreeting);
	}

	return (
		<div>
			<h1>{greeting.greet}</h1>
			<button onClick={updateGreeting}>Update greeting</button>
		</div>
	);
}
```

To reiterate, the proper way of working with state when it's saved as an object is to:

- Copy the old state object using the spread (...) operator and save it into a new variable and
- Pass the new variable to the state-updating function

#### Another way

```jsx
import { useState } from "react";

export default function App() {
	const [greeting, setGreeting] = useState({
		greet: "Hello",
		place: "World",
	});
	console.log(greeting, setGreeting);

	function updateGreeting() {
		setGreeting((prevState) => {
			return { ...prevState, place: "World-Wide Web" };
		});
	}

	return (
		<div>
			<h1>
				{greeting.greet}, {greeting.place}
			</h1>
			<button onClick={updateGreeting}>Update greeting</button>
		</div>
	);
}
```

The reason this works is because it uses the previous state, which is named prevState, and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object:

### Local State

States are local to the components they had been defined, which means we cannot have access to them outside of that component, but we can pass the state values of the parent to its children.

```jsx
import { useState } from "react";
const AddButton = () => {
	const [count, setCount] = useState(2);
	return <button></button>;
};

const AddTextButton = () => {
	const [text, setText] = useState("");

	const handleText = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			<input value={text} onChange={() => handleText(e)}></input>
			<p>Typed: {text}</p>
		</>
	);
};

const LocalState = () => {
	return (
		<>
			<AddButton></AddButton>
			{text}
			<AddTextButton></AddTextButton>
		</>
	);
};

export default LocalState;
```

The above snippet will give `react-dom_client.js?v=5f95f23c:19407 Uncaught ReferenceError: text is not defined`, because each state is local to the components it have been defined in.

### Initial Render

Initial render happens when the Component Tree is rendered to the DOM. Initial rendering happens when the application is loaded for the first time.
this is also called as Mounting

The values of the state changes only on the next render, for instance,

```jsx
import { useState } from "react";

const Practice = () => {
	const [count, setCount] = useState(5);

	const handleClick = () => {
		setCount(count + 1); // 6
		setCount(count + 1); // 6
		setCount(count + 1); // 6
	};

	return (
		<div>
			<button className="btn" onClick={handleClick}>
				click here
			</button>
			<h2>{count}</h2>
		</div>
	);
};
export default Practice;
```

We might be thinking in above example on each click, the value of the count will get incremented by 3, but in fact it does only by one, because the state value changes only on the next render.

To do the batch update, we pass another function to `state` function and increment the `prevCount` value.
We have access to `prevState` of our state if we pass a variable to the state function which in this case, it is `setCount.`

```jsx
import { useState } from "react";

const Practice = () => {
	const [count, setCount] = useState(5);

	const handleClick = () => {
		setCount((prevCount) => {
			return prevCount + 1;
		}); // 6
		setCount((prevCount) => prevCount + 1); // 7
		setCount((prevCount) => prevCount + 1); // 8
	};

	return (
		<div>
			<button className="btn" onClick={handleClick}>
				click here
			</button>
			<h2>{count}</h2>
		</div>
	);
};
export default Practice;
```

#### Re-Render

It happens when any change is occurred in the application, for the changes to be rendered in the application,instead of manipulating the whole DOM, a Virtual DOM is created by React, and only the parts that are changed changed will be changed in actual DOM tree.

when there is changes in state or props, React will re-render the component to reflect the changes or if there is any change in the parent element.

- whenever we change the stateValue,we trigger the render event and we can observe the latest changes in the browser, in fact we are reprinting the view instead of the building the app from scratch, just like a house, painting with different colors instead of building the house from scratch.

- `useState` allows to change the value.

### General Rules of Hooks

- They starts with `use` keyword.
- Must be used inside the component and that too, inside functional component.
- Component must be in upper case.
- Do not use hooks inside a conditional statement.
- Set expressions, do not call them immediately

## Use State Array

### Filter method

- The filter() method takes a callback function as its argument.
- The callback function is executed for each element in the array.
- It returns a new array that might be different in terms of size from original array.
- If the callback function returns true for a given element, that element is included in the filtered array. If it returns false, the element is excluded.
- The filtered elements are collected into a new array.

### Batching

Batching refers to a performance optimization where multiple state updates that occur within the same event handler or lifecycle method are grouped together into a single re-render instead of causing multiple re-renders.

```jsx
import { useState } from "react";

const BatchingExample = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("");

	const handleClick = () => {
		setCount(count + 1);
		setText("Updated Text");
		// Even though two state updates are made, React will batch them and re-render only once.
	};

	return (
		<div>
			<p>Count: {count}</p>
			<p>Text: {text}</p>
			<button onClick={handleClick}>Update Both</button>
		</div>
	);
};

export default BatchingExample;
```

#### Update:

Automatic Batching (React 18+): Batches synchronous and asynchronous updates (event handlers, setTimeout, Promises, etc.) for a single render.

<!-- three specific thoughts -->

## Few good shortcuts

- `Ctrl + l` to clear the console in the browser
- or console.clear()

### General Rule

- Do not use more than three state variables in a component.
- Instead of having one state for each variable, if possible use an object instead.

```jsx
import { useState } from "react";
import GoalsList from "./components/GoalsList";
import AddGoals from "./components/AddGoal";
function App() {
	const [allGoals, setAllGoals] = useState([]);

	const addGoal = (goal) => {
		setAllGoals([...allGoals, goal]);
	};
	console.log(allGoals);
	return (
		<div className="container">
			<AddGoals onAddGoal={addGoal}></AddGoals>
			<GoalsList allGoals={allGoals}></GoalsList>
		</div>
	);
}

export default App;
```

```jsx
import { useState } from "react";
const AddGoals = ({ onAddGoal }) => {
	const [formData, setFormData] = useState({ goal: "", due: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddGoal(formData);
		setFormData({ goal: "", due: "" });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="goal"
				value={formData.goal}
				placeholder="goal"
				onChange={handleChange}></input>
			<input
				type="text"
				name="due"
				value={formData.due}
				placeholder="by..."
				onChange={handleChange}></input>
			<button>add </button>
		</form>
	);
};
export default AddGoals;
```

```jsx
const handleNameChange = (e) => {
	setFormData({ ...formData, goal: e.target.value });
};
const handleNameChange = (e) => {
	setFormData({ ...formData, due: e.target.value });
};
```

We can combine the above snippet into one, but keep in mind the name of the input fields, they should have unique names and should match the object name.

```jsx
const handleChange = (e) => {
	setFormData({ ...formData, [e.target.name]: e.target.value });
};
```
