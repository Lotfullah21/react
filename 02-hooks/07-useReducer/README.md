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

It helps us to manage more complex states, we can use it at it's best when we are having multiple values inside our state.

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

- ```js
  const increment = () => {
  	dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
  	dispatch({ type: "DECREMENT" });
  };
  ```
  ;

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
