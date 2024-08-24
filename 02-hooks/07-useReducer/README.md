# useReducer

```js
useReducer(reducer, initialArg, init?)
```

### reducer

the reducer function specifies how states get update, it takes state and action as argument and should return the next state or updated state.

### initialArg:

it is the initial value of the state which had to be defined.

### Returns

it returns the current state and the dispatch function that lets us to update the state and re-render the page.
React will set the next state to the result of calling the reducer function you’ve provided with the current state and the action you’ve passed to dispatch.

### dispatch

dispatch" refers to a function that is used to send or trigger an action to modify the state managed by a reducer

Sending Actions: Dispatch is used to send actions to a reducer function.
An "action" is an object that describes what kind of change or update you want to make to the state. Actions typically have a type property that specifies the type of action to perform and may contain additional data or payload needed for the action.
it is one kind of the hooks provided by React Library.

Updating State: When you call the dispatch function with an action, it triggers the associated reducer function to calculate the new state based on the action. The reducer function takes the current state and the action as input and returns the updated state. Dispatch essentially delegates the responsibility of updating state logic to the reducer.

what is a hook ?
a function that is provided by React to add state and side effects to our component.
what useReducer can do?
it helps us to manage more complex states, we can use it at it's best when we are having multiple values inside our state.

### steps to use useReducer hook

- 1. import useReducer from react

  ```js
  import React, { useReducer } from "react";
  ```

- 2. Define an initial state: create this one to represent initial state of our component, the data inside should the one we are going to manage with useReducer hook.

  ```js
  const initialState = {
    count: 0,
  };
  ```

- 3. create the reducer function: it should take two arguments, state and action. it returns a new state based on the action had been implemented on the state value.

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

- 4. use 'useReducer' in the component: it returns two element, state and dispatch (reducer function)

  ```js
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

- 5. dispatch functions: create function that dispatch actions to update the state.
- ```js
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
  dispatch({ type: 'DECREMENT' });
  ```

};

- 6. render the state:

```js
return (
  <div>
    <p>Count: {state.count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);
```

what ever we return from reducer, that will be state value.
