### Recap

useRef in some context, it is similar to useState, but it does not re-render the page if useRef variable changes.
not to forget, it is a hook that is used to create a reference to a DOM element, without unnecessary updates.
it is a way to access and interact with DOM elements or other data without triggering unnecessary updates.
it holds a reference to a DOM element.
it is an object and has current property which holds the value we are passing in.

```js
const refValue = useRef(null);
```

we have two way to set this value,
1- setup your own functionality and add the ref value
2- we can get the 'refValue' and set it to any DOM elements(input, button, h1, .....) using 'ref' attribute.

The HTML DOM (Document Object Model) is a programming interface that represents the structure of an HTML document as a tree of objects. It allows you to interact with and manipulate the content, structure, and style of HTML documents using scripting languages like JavaScript.

## Custom hooks

using custom hooks, we can share and encapsulate stateful logic across components.
it allows us to create re-usable piece of code and use it in functional components.
custom hooks follow a naming convention, their name should start with 'use' to indicate that they are hooks.
Custom hooks provide a way to share complex logic across different components without repeating code.
They also enable you to separate concerns, making your components more focused and easier to maintain.
you should follow React's rule while using custom hooks, like defining on top level of the component.
it is just a function.
To create a custom hook, you usually start by defining a function that uses existing React hooks to provide a specific behavior or piece of functionality.
Here's how you can create a custom hook in React:

Create a New Function:
Start by creating a new function that will serve as your custom hook. It should be a regular JavaScript function that uses existing React hooks.

Define the Logic:
Within your custom hook function, you can use existing React hooks like useState, useEffect, useContext, and more to encapsulate the desired functionality.

Return Values:
The custom hook should return any values, state, or functions that are needed by the components using the hook.



```js
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

##### Remember to use if(!data) or if(loading) befor destructuring the data, as it is an asynchronous opearation, instantly we do not hava access to the data and we would get the error of null.

```js
import { useState, useEffect } from "react";

// Custom hook to fetch data from an API
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading };
}

// Using the custom hook in a component
function MyComponent() {
  const { data, loading } = useFetch("https://api.example.com/data");

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```
