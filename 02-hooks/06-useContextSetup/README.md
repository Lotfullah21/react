## prop drilling

Prop drilling is a term used in React to describe the process of passing data from a parent component down to deeply nested child components through multiple layers of intermediate components. Each intermediate component must explicitly pass the prop to its child, even if it doesn't use the prop itself.

## context

context in programming refers to the information, conditions, or environment that surrounds and influences a specific task or operation, so here we can say we are creating a global environment where all parts of our application has access to.

in React, the Context API can be used to create a global context that allows you to share data and state across your entire application. This global context is often used for managing application-wide state, user authentication, themes, and other data that needs to be accessible from various parts of your application without prop drilling.

## children

the use of the children prop inside a component is a common pattern for passing content or components as children to other components. This pattern is particularly useful when you want to create reusable components that can render dynamic content or wrap other components.

## Setup

- Create a file in `src` folder to provide global info or context info (`./src/context.jsx`)

- import the following properties

```sh
import { createContext, useContext, useState } from "react";
```

- Create a context

```jsx
const MyContext = createContext();
```

- Create a component and inside that component, use the created context, pass the global values and wrap the `children` prop.

```jsx
const MyGlobalContextProvider = ({ children }) => {
	const [college, setCollege] = useState("Massachuset Institute of technology");
	return (
		<GlobalContext.Provider value={{ college }}>
			{children}
		</GlobalContext.Provider>
	);
};
```

- Create a custom hook to easily use the context in other components

```jsx
const useMyGlobalContext = () => {
	return useContext(GlobalContext);
};
```

- Export the hook and Provider Component

```jsx
export { useMyGlobalContext };
export default MyGlobalContextProvider;
```

- Go to `main.jsx` and wrap the `<App>` by the component that is providing the context

```jsx
<MyGlobalContextProvider>
	<App />
</MyGlobalContextProvider>
```

Complete code
`./src/context.jsx`

```jsx
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const MyGlobalContextProvider = ({ children }) => {
	const [college, setCollege] = useState("Massachuset Institute of technology");
	return (
		<GlobalContext.Provider value={{ college }}>
			{children}
		</GlobalContext.Provider>
	);
};

const useMyGlobalContext = () => useContext(GlobalContext);

export { useMyGlobalContext };

export default MyGlobalContextProvider;
```
