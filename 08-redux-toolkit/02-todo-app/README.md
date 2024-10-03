## Few Important points

- Always invoke the reducer function inside `dispatch` hook.

Wrong

```jsx
const dispatch = useDispatch();
const handleClear = () => {
	// Not invoking the dispatched reducer
	dispatch(cleartodoList);
};
```

Right

```jsx
const dispatch = useDispatch();
const handleClear = () => {
	// Invoking
	dispatch(cleartodoList());
};
```

- If passing a specific payload related to each item, do not invoke that handler immediately.

```jsx
const handleSubmit = () => {
	if (textInput.trim()) {
		dispatch(addToList(textInput));
		setTextInput("");
	}
};
```

Wrong, it will get invoked immediately and causes infinite rendering

```jsx
<button onClick={handleRemove(todoItem.id)>remove</button>
```

Correct, pass the handler inside an anonymous function.

```jsx
<button onClick={() => handleRemove(todoItem.id)>remove</button>
```

- Do not return anything from the reducer in slices, redux does that for use. Just mutate the properties.
  It causes unexpected behavior, we are mutating the whole object and returning a new one.

```jsx
	removeFromList: (state, action) => {
			newState= state.todo.filter((todo) => todo.id !== action.payload);
            return newState
		},
```

Correct, mutating the property

```jsx
	removeFromList: (state, action) => {
			state.todo = state.todo.filter((todo) => todo.id !== action.payload);
		},
```

- We can have a single store in our application.
