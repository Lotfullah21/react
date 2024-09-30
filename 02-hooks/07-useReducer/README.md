# useReducer

```js
useReducer(reducer, initialArg, init?)
```

In `useState`, we had `[data, setData]` and `setData()` was responsible to manipulate the state and to the `useState()` hook, we needed to pass the default value for our state, but in `useReducer` we are having two parameters, a `function` to manipulate the state and an `initial value` for our state.

## Parameters:

#### 1. reducer

A function that manipulates the state and controls the entire state.
The reducer function specifies how states get updated, it takes two other arguments, `state` and `action` as argument and should return the next state or updated state.

#### 2. initialArg:

It is the initial value of the state which had to be defined in advance.

##### What useReducer returns

From `useState`, we used to get two elements, `state value and a function to manipulate that value`.
On the other hand, `useReducer` in the component returns two element, `state` and `dispatch` (reducer function).

The main idea is the same between the two, but implementation is different.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

1. The Current state
2. The dispatch function that lets us to update the state and re-render the page.

`state` cannot be bounded to only a single state, but rather we can have many many states.

React will set the next state to the result of calling the reducer function we’ve provided with the current state and the action you’ve passed to dispatch.

We can access to the state values using `state.propertyName.`

```js
const defaultState = {
	colleges: universities,
};

const [state, dispatch] = useReducer(reducer, defaultState);
console.log(state.colleges);
```

### What is dispatch(reducer function)?

`dispatch` refers to a function that is used to send or trigger an action to modify the state managed by a reducer function.

### Sending Actions:

Dispatch is used to send actions to a reducer function.

An `action` is an object that describes what kind of change or update we want to make to the state.

Actions typically have a type property that specifies the type of action to perform and may contain additional data or payload needed for the action.

### Updating State:

When we call the `dispatch` function with an action, it triggers the associated reducer function to calculate the new state based on the action. The reducer function takes the current state and the action as input and returns the updated state.
Dispatch essentially delegates the responsibility of updating state logic to the reducer.

##### what is a hook ?

A function that is provided by React to add state and side effects to our component.

##### what useReducer can do?

- It helps us to manage more complex states, we can use it at it's best when we are having multiple values inside our state.

- It has only one state and one reducer function that helps us to manage the logic and state inside `reducer` function.

## Why `useReducer`

Lets say we are having four state variables, how to handle them individually, how to update them, how to keep them in one place, that is where the `useReducer` comes to rescue. It helps us ot manage our state inside one object and all of of our state logic inside one function (`reducer`).

```jsx
const [price, setPrice] = useState();
const [color, setColor] = useState();
const [rating, setRating] = useState();
const [discount, setDiscount] = useState();
```

Now, lets use `useReducer`, isn't it beautiful really, the only thing is the setup is a bit time consuming, once its in place, we move like stars.

```jsx
const initialState = {
	price: "",
	color: "",
	rating: "",
	discount: "",
};

const [state, dispatchCartAction] = useReducer(reducer, initialState);
```

## Steps to use useReducer hook

### - 1. import useReducer from react

```js
import React, { useReducer } from "react";
```

### - 2. Define an initial state: create this one to represent initial state of our component, the data inside should the one we are going to manage with the useReducer hook.

```js
const initialState = {
	count: 0,
};
```

### - 3. create the reducer function: it should take two arguments, state and action. it returns a new state based on the action had been implemented on the state value.

```js
const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, count: state.count + 1 };
		case "DECREMENT":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
```

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### - 4. dispatch functions: create function that dispatch actions to update the state.

```jsx
const increment = () => {
	dispatch({ type: "INCREMENT" });
};
const decrement = () => {
	dispatch({ type: "DECREMENT" });
};
```

Complete code:

```jsx
import { useReducer } from "react";

const initialState = {
	count: 0,
};

const reducer = (state, action) => {
	if (action.type === "INCREMENT") {
		return { ...state, count: state.count + 1 };
	}
	if (action.type === "DECREMENT") {
		return { ...state, count: state.count - 1 };
	}
	return state;
};

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => {
		dispatch({ type: "INCREMENT" });
	};
	const decrement = () => {
		dispatch({ type: "DECREMENT" });
	};

	return (
		<>
			<h1>{state.count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</>
	);
};

export default Counter;
```

### - 5. render the state:

```js
return (
	<div>
		<p>Count: {state.count}</p>
		<button onClick={increment}>Increment</button>
		<button onClick={decrement}>Decrement</button>
	</div>
);
```

What ever we return from the reducer, that will be state value.

## Payload

We can pass data to our dispatch actions as payload and build our logic based on those data inside reducer function.

```jsx
import { useState } from "react";

export const initialState = {
	cart: [],
};
export const reducer = (state, action) => {
	switch (action.type) {
		case "REMOVE":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		default:
			return state;
	}
};
```

```jsx
import { products } from "../db/data";
import { useCartContext } from "../context/context";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
	const { state, dispatchCartAction } = useCartContext();

	const removeFromCart = (product) => {
		dispatchCartAction({ type: "REMOVE", payload: product });
	};

	console.log(state.cart);
	return (
		<section className="cards-container">
			{products.map((product) => {
				return (
					<div key={product.id} className="card-wrapper">
						<ProductCard product={product} key={product.id}></ProductCard>
						<button
							className="cart-btn"
							onClick={() => removeFromCart(product)}>
							remove
						</button>
					</div>
				);
			})}
		</section>
	);
};
export default ProductsContainer;
```

### When to choose useReducer vs useState

The useState hook is best used on less complex data.

While it's possible to use any kind of a data structure when working with useState, it's better to use it with primitive data types, such as strings, numbers, or booleans.

The useReducer hook is best used on more complex data, specifically, arrays or objects.
One of the main advantage of using `useReducer` is we can write all of our logics in one place inside `reducer` function.

## Pure functions

pure functions are functions that adhere to two key principles:

- Deterministic: Given the same input, a pure function will always return the same output. There are no side effects that could cause the function to return different results for the same input.

- No side effects: Pure functions do not modify external state or variables. They do not alter anything outside their scope (e.g., they don't modify global variables, DOM elements, files, or databases). Instead, they only operate on the inputs given to them and return a new result.
