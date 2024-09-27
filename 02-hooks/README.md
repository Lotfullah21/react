## Data in react

All data in react can be categorized into two types

#### Props Data

Props data is the data outside the component and the component at the receiving end cannot change it.

#### State Data

State data is the data inside the component and component has control to change it.

## Hooks

hooks are functions that lets us to hook into React state and lifecycle features of components.

- Hooks can be called only at the top level and only from React functions.
- You can only call hooks at the top level of your component or your own hooks.
- You cannot call hooks inside loops or conditions.
- You can only call hooks from React functions, and not regular JavaScript functions2
- In React, state is always referred to the local state of a component.

## Examples

```jsx
import { useState } from "react";

const InputComponent = () => {
	const [text, setText] = useState("");

	const inputHandleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div>
			<input value={text} onChange={inputHandleChange}></input>
			<p>You are typing: {text}</p>
			<button onClick={setText("")}>Reset</button>
		</div>
	);
};
export default InputComponent;
```

```jsx
<button onClick={setText("")}>Reset</button>
```

Here, directly we are invoking the `setText` which is wrong, either use an arrow function or pass it to another function and reference it here

- First solution

```jsx
<button onClick={() => setText("")}>Reset</button>
```

- Second Solution

```jsx
const handleReset = () => {
	setText("");
};

<button onClick={handleReset}>Reset</button>;
```

## State

It is the components internal data that determines the behavior of the component.

## Prop drilling

prop drilling is a situation where we are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required.

## Stateful vs Stateless

- stateful components holds internal data specific to the component.
- stateless component does not hold internal data and any data must be inherited through props.
