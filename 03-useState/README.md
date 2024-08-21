## React Hook

Hooks are a set of functions that allow us to add state and other React features to functional components without using class components.
they starts with 'use' keyword
must be used inside the component
component must be in upper case
do not use hooks inside a conditional statement.
set expressions, do not call them immediately.
useEffect:
Used for handling side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components
useContext:
Allows you to consume context values within a functional component. Context provides a way to share data without passing props through every level of the component tree.
useState:Allows functional components to manage state. It returns the current state value and a function to update that state

## Use State

it is a function that is provided by react,it returns an array with two elements, an initial value or current state value and a function to update the state value.
In React, the useState hook is used to manage state within functional components. It allows you to add stateful behavior to your components without the need to convert them into class components. Here's how you can use the useState hook:
In your functional component, declare state variables using the useState hook. The hook returns an array with two elements: the current state value and a function to update that value.

### Initial Render

initial render happens when the Component Tree is rendered to the DOM. Initial rendering happens when the application is loaded for the first time.
this is also known as Mounting

### Re-Render

it happens when any change is occured in the application,for this to be rendered in the application,instead of manipulating the whole DOM, a Virtual DOM is created by React, and only the parts changed will be changed in the actual DOM tree.

when there is changes in state or props, React will re-render the component to reflect the changes.
or if there is any change in the parent element.

- whenever we change the stateValue,we trigger the render event and we can observe the latest changes in the browser
- useState allows to change the value

## Use State Array

### Filter method

The filter() method takes a callback function as its argument.
The callback function is executed for each element in the array.
If the callback function returns true for a given element, that element is included in the filtered array. If it returns false, the element is excluded.
The filtered elements are collected into a new array.

### Batching

when we are using multiple states and update their values at the same, if we re-render every time we change the state, their would multiple of that rendering which is un-efficient.
we use the concept of batching where we group multiple state update and render it once.

<!-- three specific thoughts -->
