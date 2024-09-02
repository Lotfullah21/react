## Redux

redux is a library that is used to manage the state of the web application.
Redux provides a predictable and centralized way to manage the application's state, making it simpler for us to maintain complex front-end applications.

#### Key Features

##### Store

The store is a single JavaScript object that holds the entire application's state. It serves as a single source of truth for your data.

##### Action

An action is a plain JavaScript object that describes what should happen in your application
Actions are plain JavaScript objects that represent events or user interactions that trigger state changes. They typically have a type property and may include additional data.

##### Reducers

Reducers are pure functions that specify how the application's state should change in response to actions. They take the current state and an action as input and return a new state.

##### Dispatch

Dispatching an action is the process of sending an action object to the Redux store. It is the way to trigger state changes.
Redux follows a unidirectional data flow, which means that the state is updated only through actions and reducers.

## redux-toolkit

Redux Toolkit is a library built on top of Redux that simplifies and streamlines the process of working with Redux in React applications
It provides a set of utilities and abstractions to reduce the amount of boilerplate code typically associated with Redux, making it easier and more efficient to manage application state

```js
npm create vite@latest project-name --template react
cd project-name
npm install redux react-redux  @reduxjs/toolkit
npm install
npm run dev

```
```js
npm install react-icons
```
## Create a Redux Store:

a "store" is a core concept that represents the entire state tree of your application.
Create a Redux store using the configureStore function provided by Redux Toolkit. This function combines the reducer(s) and sets up other store configurations.
a "reducer" function specifies how the application's state should change in response to dispatched actions.
It is responsible for:
Holding the Application State,Providing Methods to Access the State,Reducing State.

#### slice

a "slice" refers to a self-contained unit of Redux state management that includes a reducer and associated action creators. Slices are a way to organize and manage different parts of your application's state in a more modular and structured manner.
A Redux Toolkit slice includes its own reducer.

#### Reducers:

A reducer is a pure function that specifies how a particular piece of the application state should change in response to dispatched actions. The reducer takes the current state and an action as input and returns a new state. A Redux Toolkit slice includes its own reducer.

#### Actions:

Redux Toolkit slices automatically generate action creators based on the reducer's structure, reducing the need to write action creator functions manually.

#### Initial State:

The slice defines its initial state, which represents the initial data structure for that specific part of the application state.

#### Slice Name

Each slice has a name, which is used to identify it and determine where its state will be stored in the Redux store.
You can create multiple slices for different parts of your application's state, and Redux Toolkit provides tools to combine them into a single Redux store.

step-by-step example on how to work with redux-toolkit

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

Create a Redux store using configureStore from Redux Toolkit. It combines the reducers from all your slices and sets up the Redux store.

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

#### Step 4: Connect Redux Toolkit to a React Component

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

#### 1: useSelector

useSelector is used to access data from the Redux store in a functional component. It takes a selector function as an argument, and this selector function is used to extract specific pieces of state from the Redux store. It returns the selected data.
it selects data from store.

```js
import { useSelector } from "react-redux";

const MyComponent = () => {
  // Use useSelector to access data from the Redux store
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
```

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

```js
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h1>Your Bag</h1>
          <h3>Empty</h3>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h1>Your bag</h1>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item}></CartItem>
        ))}
      </div>
      <footer>
        <hr></hr>
        <div>
          <h2>
            total: <span>{total}</span>
          </h2>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
```
