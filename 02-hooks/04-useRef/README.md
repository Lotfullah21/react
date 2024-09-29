## useRef

unlike useState Hook, page is not going to re-render if the useRef value changes.
The `useRef` hook is used to create a mutable reference to a value that persists across renders of a component. Unlike the `useState` hook, which causes a re-render when the state changes, `useRef` does not trigger a re-render when the value it holds changes. Instead, it allows you to interact with the DOM or hold onto values in a way that is not tied to the component's rendering cycle.

The `useRef` hook is commonly used for the following purposes:

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
