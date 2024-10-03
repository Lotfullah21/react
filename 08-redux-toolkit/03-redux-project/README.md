## Mutation in redux

"Mutating state directly" means changing the existing state object by modifying its properties instead of creating a new state object with updated values.
In vanilla Redux (without @reduxjs/toolkit), directly mutating the state is forbidden because Redux relies on immutability. You must always return a new state object with any updates, as this ensures that state changes are tracked properly for features like time-travel debugging and reactivity.

direct mutation (which is problematic in vanilla Redux)

```jsx
// Mutating state directly
function reducer(state, action) {
	state.value += 1; // Directly modifying the state object
	return state;
}
```

create and return a new state object instead of mutating the existing one:

```jsx
// Returning a new state object instead of mutating
function reducer(state, action) {
	return {
		...state, // Spread the existing state properties
		value: state.value + 1, // Update the value property
	};
}
```

## Why Mutating is Normally Not Allowed

Directly changing the state can lead to unpredictable behavior because Redux expects state to be immutable. If you modify the original state object, React and Redux might not detect that something has changed, leading to issues in the app's state tracking and updates.

## How @reduxjs/toolkit Handles Mutations

Redux Toolkit uses a library called Immer, which allows you to write code that looks like it’s mutating the state directly (e.g., state.value += 1), but behind the scenes, it creates a new state object with those changes. This makes your reducers simpler and more readable, but the state remains effectively immutable.

Here’s how Immer works in Redux Toolkit:

```jsx
const counterSlice = createSlice({
	name: "counter",
	initialState: { value: 10 },
	reducers: {
		increment: (state) => {
			state.value += 1; // Looks like a mutation, but it's actually immutable under the hood
		},
	},
});
```

Mutation: Directly changing the state object (e.g., state.value += 1).
Immutability: Instead of mutating, you create a new state object to ensure predictable state updates.

Mounting is a one-time event when the component is added to the DOM, The process of attaching a component to the actual DOM for the first time.
Rendering happens during the initial mount and every time the component needs to update based on state or prop changes,The process of determining what the UI should look like based on the component’s state and props.
