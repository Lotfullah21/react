## useEffect

The useEffect hook is used for performing side effects in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, and more.
This function will run after the component has rendered.
Side effects in React refer to actions that occur outside of the regular component rendering cycle, such as data fetching, subscribing to external services, manipulating the DOM, and so on. The useEffect hook is used to manage these side effects in a controlled and efficient manner.
Setting up Effects: You define the useEffect hook inside your functional component. It takes two arguments:
a function that contains the code for the side effect.
and an array of dependencies that determine when the effect should run.
Running the Effect: When the component renders, the function inside useEffect is executed. It might perform tasks like fetching data, updating the DOM, or setting up event listeners.
Cleaning Up: If the effect requires cleanup, such as unsubscribing from a subscription or removing event listeners, you can return a cleanup function from the effect.
The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.
However, that may cause performance issues, especially if your side effects are computationally intensive. A way to instruct React to skip applying an effect is passing an array as a second parameter to useEffect.
Dependencies Array: The second argument of useEffect is an array of dependencies. If this array is provided, the effect will run whenever any of the dependencies change. If the array is empty, the effect runs only once, similar to componentDidMount in class components.
for instance if we have [number] inside our dependency, the side effect will be executed only if number has changed, it means we are tracking the state of a state variable.
if [2] and after doing some operation, still it is, react will compare this previous value, if it is the same, DOM won't be updated.

#### Rule

- we cannot use async fn as a callback to the useEffect, but we can use it inside the callback

```js
// using async
useEffect(async () => {}, []);
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch(ulr);
    const response = await data.json();
    return response;
  };
  fetchData();
}, []);
```

```js
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This function will run after the component has rendered.
    // It can be used for fetching data, subscribing to events, etc.

    // Example: Fetching data from an API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));

    // Clean-up function (optional)
    return () => {
      // This function will run before the component unmounts.
      // It can be used for cleaning up resources like event listeners.
    };
  }, []); // empty dependencies array ensures the effect runs only once after the initial render.would useful for api calls.
  //   if second argument is not passed, by default it will run after each render and re-render

  return (
    <div>
      {/* Display the fetched data */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
```

if we call a regular function inside a component, by default they will be invoked everytime we re-render.

### map

The map() function is a built-in method available in JavaScript arrays. It's used to iterate over an array and apply a given function to each element, creating a new array with the results of those function calls. It's particularly useful when you want to transform an existing array into a new array of the same length.

The map() function returns a new array with the results of applying the provided function to each element.

Keep in mind that the original array remains unchanged. The map() function doesn't modify the original array; it produces a new array with the transformed values.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

#### Important

for every {} we are adding a block of code,which means that should return something,

```js
{
  return (
    <> user.map((person) => {
    return (

        <article key={person.id}>
          <h2>{person.login}</h2>
          <img src={person.avatar_url}></img>
        </article>

    );
  });
  </>
  )
}
```

we add another {} in map block, which we need to another return statement inside this block, otherwise it will return nothing.

In JavaScript arrow functions with a single expression, like the one you're using within .map(), the parentheses () around the expression implicitly indicate the return value.

```js
{

  return (
    <section>
      {users.map((user) => (
        <article key={user.id}>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={`${user.login} avatar`} />
        </article>
      ))}
    </section>
```

### Falsy

it is a falsy if it results to a false value

```js
0;
(" ");
NaN;
undefined;
null;
false;
```

### Truthy

it is a truthy if it is evaluted to true when using in boolean conditioning

```js
[arrays]
{objects}
(all other values)
```
