### Parent-Child relation

- React app consist of many components,which they are organized in a tree structure.
- the component that is used inside another component is known as child component, and the parent component is the one that child component lives in
- we can pass data only from parent to child only, so the direction is uni-directional relationship.
- the data we are passing from parent to child is known props, and that is immutable, which means we cannot change it inside child component
- there is two main reasons why this relationship is one-way
  - comprehend the logic of React apps more quickly and
  - simplify the data flow.

```js
import Footer from "./Footer";
import Pages from "./Pages";
const Home = () => {
  return (
    <>
      <Footer year={2023} app="facebook,youtube"></Footer>
      <Pages links="home,courses"></Pages>
    </>
  );
};
export default Home;
```

we can see, Home is the parent component

```js
const Footer = (props) => {
  return (
    <h4>
      {props.year} {props.app}
    </h4>
  );
};
export default Footer;
```

and year is a property that had been defined inside Home component.

All the data inside react can be divided into two types

- Props Data: data outside a component which the component cannot mutate it is an object (belongs to parent).
- State Data: data inside a component which the component can mutate(belongs to component).

## HOOKS

hooks are functions that let us hook into React state

- You can only call hooks at the top level of your component or your own hooks.

- You cannot call hooks inside loops or conditions.

- You can only call hooks from React functions, and not regular JavaScript functions.

## STATE:

- it is component's internal data, that helps to change the behavior of that component.
- it is a way to deal with data that is likely to change in the application.
- parent component can pass it's state to the child.
- The props object represents data that is external to a component, and state represents data that is internal to a component.
- components can be stateful or stateless

stateful

```js
import { useState } from "react";

const Pages = (props) => {
  const [text, setText] = useState("Hello");
  return (
    <div>
      {props.links} {text}
    </div>
  );
};
export default Pages;
```

stateless

```js
const Pages = (props) => {
  return <div>{props.links}</div>;
};
export default Pages;
```

### Notes on web design

Web design like any other experiments, settled on accepted and expected designs
'Don't make users think'

## Navigation

- in react entire app is rendered inside a single div,different views will be rendered when react makes any changes to the virtual dom or real dom
- when we open a new link, we are going to that link, in fact that link content will be rendered inside the react app.
