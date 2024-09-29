## useRef

Unlike useState Hook, page is not going to re-render if the useRef value changes.

The `useRef` hook is used to create a mutable reference to a value that persists across renders of a component. Unlike the `useState` hook, which causes a re-render when the state changes, `useRef` does not trigger a re-render when the value it holds changes. Instead, it allows you to interact with the DOM or hold onto values in a way that is not tied to the component's rendering cycle.

The `useRef` hook is commonly used for the following purposes:

It returns an object `{current:refValue}`

The useRef hook returns an object that doesn’t change on re-renders, but you can store and update its .current value. This makes it ideal for storing values like intervals, DOM elements, or any mutable data that you don't want to trigger re-renders when updated.

1. **Accessing DOM Elements**: You can use `useRef` to get a reference to a DOM element and interact with it directly. For instance, you might want to focus an input element, scroll a container, or measure the dimensions of an element.

2. **Storing Values Between Renders**: Since the value held by a `useRef` doesn't trigger re-renders, it's often used to store values that you want to persist between renders without causing a re-render. For instance, you might want to store a previous value to compare it with the new value in the next render.

Here's a basic example of how to use `useRef`:

```jsx
import React, { useRef } from "react";

function ExampleComponent() {
	const inputRef = useRef(null);

	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input ref={inputRef} type="text" />
			<button onClick={focusInput}>Focus Input</button>
		</div>
	);
}
```

In this example, the `useRef` hook is used to create a reference called `inputRef`, which is attached to the `input` element. When the button is clicked, the `focusInput` function is called, which uses the `inputRef` reference to focus the input element.

Remember that while `useRef` is used to persist values across renders, it doesn't trigger a re-render on its own. If you want to create state that causes re-renders when it changes, you should use the `useState` hook instead.

```jsx
import { useState } from "react";
import { useRef } from "react";

const Counter = () => {
	const refValue = useRef();
	const [value, setValue] = useState(0);

	const handleIncrement = () => {
		setInterval(() => {
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 1000);
	};
	const handleDecrement = () => {
		setInterval(() => {
			setValue((prevState) => {
				return prevState - 1;
			});
		}, 1000);
	};

	const handleStop = () => {
		setValue(0);
	};
	return (
		<div>
			<h4>Count: {value}</h4>
			<button onClick={handleIncrement}>Start Increment</button>
			<button onClick={handleDecrement}>Start decrement</button>
			<button onClick={handleStop}>Stop</button>
			<button></button>
		</div>
	);
};
export default Counter;
```

`SetInterval` returns an id every time it does an increment, now that id helps us in clearing the interval, because we cannot just stop the interval by the given function.

```jsx
const handleStop = () => {
	setValue(0);
};
```

```jsx
let timerId = "";
const handleIncrement = () => {
	timerId = setInterval(() => {
		setValue((prevState) => {
			return prevState + 1;
		});
	}, 1000);
	console.log({ timerId });
};

const handleStop = () => {
	console.log(timerId);
	clearInterval(timerId);
};
```

If we just use a variable, the value is not saved between the re-renders, the timer id inside handleIncrement is different than the value inside handleStop, to preserve the value, we use `useRef.`

Usually we use `useRef` values in places where we do not need to render the value on screen.
