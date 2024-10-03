```js
npm create vite@latest project-name --template react
cd project-name
npm install
npm install redux react-redux  @reduxjs/toolkit
npm install react-icons
npm run dev
```

Previously, we have `useContext` to create global state and `useReducer` to update or manage the state, redux can do both.

## Redux

redux is a library that is used to manage the state of the web application, so we can say it is a state management library.
Redux provides a predictable and centralized way to manage the application's state, making it simpler for us to maintain complex front-end applications.

## react-redux

connects our app to redux.

# Key Features

## Store

The store is a single JavaScript object that holds the entire application's state. It serves as a single source of truth for your data.

### Setup Store

- create store.js at src folder

```js
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
	reducer: {},
});
```

## Reducers

Reducers are pure functions that specify how the application's state should change in response to actions. They take the current state and an action as input and return a new state.

## Action

An action is a plain JavaScript object that describes what should happen in your application.

## Dispatch

Dispatching an action is the process of sending an action object to the Redux store. It is the way to trigger state changes.
Redux follows a unidirectional data flow, which means that the state is updated only through actions and reducers.

# redux-toolkit

Redux Toolkit is a library built on top of Redux that simplifies and streamlines the process of working with Redux in React applications.
It provides a set of utilities and abstractions to reduce the amount of boilerplate code typically associated with Redux, making it easier and more efficient to manage application state

## slice

We can think of slice as features of our application, like modal, cart functionality.
a "slice" refers to a self-contained unit of Redux state management that includes a reducer and associated action creators. Slices are a way to organize and manage different parts of your application's state in a more modular and structured manner.
A Redux Toolkit slice includes its own reducer.

Connect the state to reducer function, a function that controls and changes the state values.

### Cart Slice Properties

#### 1. Initial State:

The slice defines its initial state, which represents the initial data structure for that specific part of the application state.

#### 1. Slice Name

Each slice has a name, which is used to identify it and determine where its state will be stored in the Redux store.
You can create multiple slices for different parts of your application's state, and Redux Toolkit provides tools to combine them into a single Redux store.

# Hooks in redux library

## 1. useSelector

It returns the entire state date from store file and using this hook, we can get access to our states any where in our app.

useSelector is used to access data from the Redux store in a functional component. It takes a selector function as an argument, and this selector function is used to extract specific pieces of state from the Redux store. It returns the selected data.

it selects data from store.
If there is a change in state of our app, useSelector will be invoked to update the component UI.

```js
import { useSelector } from "react-redux";

const MyComponent = () => {
	// Use useSelector to access data from the Redux store
	const amount = useSelector((state) => state.cart.amount);
	return (
		<div>
			<p>Count: {count}</p>
		</div>
	);
};
```

## 2. useDispatch Hook

The useDispatch hook allows us to dispatch actions to the Redux store, triggering a state change. It replaces the need for mapDispatchToProps used in class components.

```jsx
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
}
```

In a typical Redux-connected component, we would use useSelector to get data from the Redux store and useDispatch to update the state.

## Reducers:

A reducer is a pure function that specifies how a particular piece of the application state should change in response to dispatched actions. The reducer takes the current state and an action as input and returns a new state. A Redux Toolkit slice includes its own reducer.

```jsx
const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		clearCart: (king) => {
			king.items = [];
		},
	},
});

export const { clearCart } = cartSlice.actions;
```

The reducers lives inside cartSlice in `actions` property.

## Actions:

Redux Toolkit slices automatically generate action creators based on the reducer's structure, reducing the need to write action creator functions manually.

From reducers, we can return a new state.

```js
const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		clearCart: (state) => {
			return {};
		},
	},
});
```

If returned with the applied change to one property, the remaining properties will be removed from our state completely.

```js
	clearCart: (state) => {
			return {amount:0};
		},
```

```js
removeItem: (state, action) => {
	console.log("action", action);
},
console.log(action);

CartItem.js
<button className="btn-remove" onClick={() => dispatch(removeItem(id))}>

payload: "60KJlWrJ_7BpGa5niRAvd";
type: "cart/removeItem";
```

## Payload

It lives inside the action object and its the parameter we pass to our reducer function.

```js
decrease: (state, action) => {
	const id = action.payload;
	const cartItem = state.cartItems.find((item) => {
		return item.id === id;
	});
	cartItem.amount = cartItem.amount - 1;
},

```

## Crucial

It is crucial to have the return statement once dispatched `removeItem`, other wise we still continue to read the code and execute `decrease` reducer, but in fact we have already deleted that item and that triggers the error.

```js
<button
	className="btn-amount"
	onClick={() => {
		if (amount === 1) {
			dispatch(removeItem(id));
			return;
		}
		dispatch(decrease(id));
	}}>
	<FaChevronDown></FaChevronDown>
</button>
```

# step-by-step example on how to work with redux-toolkit

## step0: Setup the directories in src folder.

- create features folder and inside it create another folder similar to the name of your feature (cart, modal)
  `./features/cart`
  `./features/modal`
- create cartSlice.js, modalSlice.js
  `./features/cart/cartSlice.js`
  `./features/modal/modalSlice.js`

#### step1: Create Redux slices

we organize our state management into slices, each of which has it's own reducer(s) and action creator(s).

```js
// src/features/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});
// export reducers so that, it can be used in other components.
export const { increment, decrement } = counterSlice.actions;
// we will use it in store.js
export default counterSlice.reducer;
```

#### Step 2: Create a Redux store

a "store" is a core concept that represents the entire state tree of your application.
Create a Redux store using the `configureStore` function provided by Redux Toolkit. This function combines the reducer(s) and sets up other store configurations.
a "reducer" function specifies how the application's state should change in response to dispatched actions.

##### It is responsible for:

Holding the Application State,Providing Methods to Access the State,Reducing State.

```js
import { configureStore } from "@reduxjs/toolkit";
// import the slices you have created and store it here.
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
	reducer: {
		counter: counterReducer, // Assign your reducer(s) to specific slices of the state
	},
});
// it will help us to have access to all the states and reducers which are there in slices.
export default store;
```

#### Step 3: Connect Redux Toolkit to a React Component

Now, let's create a React component and connect it to the Redux store using useSelector and useDispatch from react-redux.

```js
// src/Counter.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default Counter;
```

#### step 4: Provide the Redux Store

Wrap your root component with the Provider component from react-redux to make the Redux store accessible throughout your React application.

```js
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

ReactDOM.render(
	<Provider store={store}>
		<Counter />
	</Provider>,
	document.getElementById("root")
);
```

Now, your React component (Counter) is connected to the Redux store, and it can read data from the store and dispatch actions. This approach helps manage application state in a scalable and maintainable manner, especially for larger and more complex applications.

`useSelector` and `useDispatch` are two hooks provided by the react-redux library to interact with a Redux store in a React component. They are used to read data from the store and dispatch actions, respectively.

In this example, useSelector is used to select the count property from the counter slice of the Redux store.
The state object in the useSelector callback represents the entire Redux store state. In this context, it refers to the global state of your Redux store, which contains all the data managed by Redux.

```js
// import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
	console.log(useSelector((store) => console.log(store)));
	return (
		<nav>
			<div className="nav-center">
				<h3>Redux toolkit</h3>
				<div>
					<FaCartPlus></FaCartPlus>
					<div className="cart-container">
						<p>0</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
```

## CSS

The button is centering because the `text-align: center;` style on the footer element applies to inline elements like text and inline-block elements like your button.
However, the h4 heading is not centering because headings (h4 in this case) are block-level elements by default, and `text-align: center;` only centers inline content inside block elements, not the block element itself.

To align the btn in center, either we have to add a fixed width and add display block and `margin:0 auto`. or just apply `text-align:center` on the parent which is the footer.

button is an `inline-block` element which respects the margin, but does not start a new line.

```jsx
<footer>
	<hr></hr>
	<div className="cart-total">
		<h4>
			total<span>${total.toFixed(2)}</span>
		</h4>
	</div>
	<button className="btn clear-btn" onClick={() => dispatch(openModal())}>
		clear
	</button>
</footer>
```

```css
footer {
	border: 2px solid red;
	text-align: center;
}

.clear-btn {
	width: 8rem;
	font-size: 1.2rem;
	text-transform: capitalize;
	letter-spacing: 2px;
	background: transparent;
	cursor: pointer;
	margin-top: 1rem;
	padding: 0.2rem 0.4rem;
	border: 1px solid var(--clr-grey-6);
	transition: var(--transition);
	transition: background-color 0.2s ease-in;
}
```

It looks cool when the border color and text color are the same in a button.

```css
.btn {
	color: var(--clr-grey-5);
	border: 1px solid var(--clr-grey-6);
}
```
