### Props

properties(props) and state are both plain JavaScript object that react uses to hold information.
props are passed to the component like a function arguments
they are received from their parents, and immutable inside child component
if props and state changes, both can trigger a render update.
props are component configuration.

## State

states are manages within the component, we can have more control using states.
it allows react to determine when to re-render a component.
any change in state value will trigger a re-render of given component.
state is private and a component manages it's state internally

### When to use

If a component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise, it should be a prop for that component.

## StateLess Component:

it has only props, all the logic revolves around the props they receive.
they are easy to follow and manage.
they are responsible for:

- Visualization
- Formatting logic

## StateFull Component:

it has both state and props.
they are responsible for:

- Client server communication.
- Data processing.
- Responding to user events.

# Context

in regular Tree, props goes down ward in uni-directional.
what if we need to some kind of data that will be needing to be used by the most of components.
Context provides a way to create a global store of data that can be accessed by any component in the tree, regardless of how deeply nested it is. This can be especially useful for scenarios like themes, user authentication, language preferences, and other types of global state.

#### Props Drilling

passing data through all components, even for the components that do not need the on the way to bottom of the tree.

context API provides an alternative way to pass the data, without passing them manually at every level.
we can use this for the data that is considered to be a global data.
Context lets the parent component make some information available to any component in the tree below it no matter how deep—without passing it explicitly through props.

### Steps to create context

##### 1 Creating a Context:

You start by creating a context using the createContext function provided by React. This function returns an object with two components: a Provider and a Consumer.

```js
// Create a context
const MyContext = React.createContext();
```

##### 2 Providing Data:

The data you want to share is wrapped by a Provider component in the parent component of the tree. The Provider makes the data available to all components nested within it.

```js
function App() {
  const data = "Hello from Context!";

  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

##### 3 Consuming Data:

Components that need access to the shared data can use the Consumer component or the useContext hook. The Consumer renders a function that receives the context value as an argument, while the useContext hook is a more modern and convenient way to access the context data.
Using Consumer:

```js
function ChildComponent() {
  return <MyContext.Consumer>{(value) => <p>{value}</p>}</MyContext.Consumer>;
}
```

using useContext

```js
import React, { useContext } from "react";

function ChildComponent() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}
```
