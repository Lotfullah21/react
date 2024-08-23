## React Hook

Hooks are a set of functions that allow us to add state and other React features to functional components without using class components.
.

#### 1. useEffect:

Used for handling side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components

### 2. useContext:

Allows you to consume context values within a functional component. Context provides a way to share data without passing props through every level of the component tree.

### 3. useState:

Allows functional components to manage state. It returns the current state value and a function to update that state.

## Use State

It is a function that is provided by react,it returns an array with two elements, an initial value or current state value and a function to update the state value.

In React, the useState hook is used to manage state within functional components. It allows you to add stateful behavior to your components without the need to convert them into class components. Here's how you can use the useState hook:

In your functional component, declare state variables using the useState hook. The hook returns an array with two elements: the current state value and a function to update that value.
or a default value and a function to control that value.
Updating the state causes re-render.

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

##### 1. Using indexing

As it is returning an array, we can directly destructure it or use indexing to get access to the state value and the function.

```js
import { useState } from "react";
const HelloState = () => {
	// The value lives in 0th index and function in first index.
	console.log(useState(1)[0]); //1
	console.log(useState(1)[1]); //  ƒ dispatchSetState(fiber, queue, action) {
};
```

##### 2. Destructuring

```js
const [value, setValue] = useState(0);
```

In fact, we are storing the value of the state in `value` variable and the function to control it in `setValue`.

### Initial Render

Initial render happens when the Component Tree is rendered to the DOM. Initial rendering happens when the application is loaded for the first time.
this is also called as Mounting

#### Re-Render

It happens when any change is occurred in the application, for the changes to be rendered in the application,instead of manipulating the whole DOM, a Virtual DOM is created by React, and only the parts that are changed changed will be changed in actual DOM tree.

when there is changes in state or props, React will re-render the component to reflect the changes or if there is any change in the parent element.

- whenever we change the stateValue,we trigger the render event and we can observe the latest changes in the browser.
- `useState` allows to change the value.

### General Rules of Hooks

- They starts with `use` keyword.
- Must be used inside the component.
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

When we are using multiple states and update their values at the same, if we re-render every time we change the state, their would multiple of that rendering which is un-efficient method.

We use the concept of batching where we group multiple state update and render it once.

<!-- three specific thoughts -->

## Few good shortcuts

- use `command+k` in mac or `Ctrl + l` to clear the console in the browser
- or console.clear()
