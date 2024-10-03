## Higher order components

It takes its functionality from higher order functions from vanilla java script.
so, what are higher order functions?

- A function that takes a function as its argument
- A function that returns a function
- A function that can do both of the above things.

For instance, map, filter, reduce and so on.

A higher order components takes the original component and props as input and return a new component without mutating the original component.

Higher order components are not that used in recent applications.

Now, lets say we are having two components with exactly same functionality,
First components

```jsx
import { useState } from "react";

const Counter1 = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 10);
	};

	return (
		<div>
			<span>Counter1: </span>
			<button className="btn" onClick={handleClick}>
				clicked {count} times
			</button>
		</div>
	);
};
export default Counter1;
```

Second Component

```jsx
import { useState } from "react";

const Counter2 = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 10);
	};

	return (
		<div>
			<span>Counter2: </span>
			<button className="btn" onClick={handleClick}>
				clicked {count} times
			</button>
		</div>
	);
};
export default Counter2;
```

How can we use HOC here,

Create a HOC with the same functionality and return the count and handle click as properties.

```jsx
const HigherOrderComponent = (Component) => {
	return (updatedComponent = () => {
		const [count, setCount] = useState();

		const handleClick = () => {
			setCount(count + 10);
		};
		return <Component count={count} handleClick={handleClick}></Component>;
	});
};
export default HigherOrderComponent;
```

## memoization

When any state value changes in parent component, all child components also will be re-rendered even if that prop or state value has nothing to do with child components.
How to avoid re-rendering of child components?

We can use memoization, remember the state and property values, unless those values change, do not re-render the child components.
But it does not guarantee that the component will not be re-rendered, it is just a technique and also used when we want to optimize the performance of our application.

```jsx
import { useState } from "react";
import Greeting from "./greeting";
const Memo = () => {
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	return (
		<div className="memo-container">
			<h1>Memoization </h1>
			<input
				value={name}
				placeholder="Name..."
				onChange={(e) => setName(e.target.value)}></input>
			<input
				value={city}
				placeholder="College..."
				onChange={(e) => setCity(e.target.value)}></input>

			<Greeting name={name}></Greeting>
		</div>
	);
};
export default Memo;
```

In the above app, props we are passing to `Greeting` is name and when we change, the component is re-rendered. Now, what if we change the city, even though we are not passing them to the child component (`Greeting`).

What to do?

Memoize the component, to memoize we wrap our child component around `memo` which is a higher order component and it returns a memoized component.
The `memo` function is a higher-order component in React that optimizes performance by preventing unnecessary re-renders.
A memoized component will be re-rendered only if its prop value changes.

```jsx
import { memo } from "react";

const Greeting = ({ name }) => {
	console.log("component re-rendered");
	return (
		<div>
			<h2>Hello {name}</h2>
		</div>
	);
};
export default memo(Greeting);
```

## How it works:

- The Greeting component will now only re-render if the name prop changes.
- If the parent component re-renders but passes the same name prop as before, Greeting will not re-render.
- The console.log("component re-rendered"); will help you verify if the component is re-rendering.

## useMemo (Hook):

Purpose: Memoizes the result of a function so that it doesn't have to be recalculated on every render.

If you have expensive calculations inside a component and you want to avoid recalculating them unless certain dependencies change.

```jsx
import { useMemo } from "react";

const ExpensiveComponent = ({ number }) => {
	// Expensive calculation that we want to avoid re-running on every render
	const squared = useMemo(() => {
		console.log("Expensive calculation");
		return number * number;
	}, [number]); // Re-run only if "number" changes

	return <h1>{squared}</h1>;
};
```
