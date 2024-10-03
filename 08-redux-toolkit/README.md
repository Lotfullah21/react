## Installation

```sh
npm create vite@latest project-name --template react
cd project-name
npm install
npm install redux react-redux  @reduxjs/toolkit
npm install react-icons
npm run dev
```

[redux-official-guide](https://redux-toolkit.js.org/)

# Redux, React-Redux, and @reduxjs/toolkit

## 1. Redux

- **What it is**: Redux is a state management library for JavaScript applications. It helps manage the application state in a predictable way.
- **Key Features**:
  - **Centralized State**: All application state is stored in a single store, making it easy to access and manage.
  - **Predictable State Changes**: State is updated using actions and reducers, making the flow of data predictable.
  - **Middleware Support**: Redux supports middleware, allowing for enhanced functionality, such as logging, error handling, or asynchronous actions.

## 2. React-Redux

- **What it is**: React-Redux is the official binding library for integrating Redux with React applications.
- **Key Features**:
  - **Connects React Components**: Provides the `connect` function to connect React components to the Redux store, allowing them to access state and dispatch actions.
  - **Hooks Support**: Includes hooks like `useSelector` and `useDispatch` for easier access to Redux state and actions in functional components.
  - **Performance Optimization**: Uses efficient updates to ensure components only re-render when necessary.

## 3. @reduxjs/toolkit

- **What it is**: Redux Toolkit is the official, recommended way to write Redux logic. It simplifies the process of setting up and working with Redux.
- **Key Features**:
  - **Simplified Configuration**: Provides a `configureStore` function that sets up the store with good defaults, including middleware.
  - **`createSlice`**: A function to create reducers and actions in a concise way, reducing boilerplate code.
  - **Built-in DevTools**: Automatically includes support for Redux DevTools, which helps in debugging.
  - **Good Practices**: Encourages using best practices, such as using immer for immutable updates and providing sensible defaults.

## Components Life cycle

Generally, components life cycles are categorized into three parts

1. Mounting
2. Updating
3. Unmounting

### Mounting

We say, a component is mounted when its added to the DOM for the first time

```jsx
componentDidMount(){
  useEffect()
}
```

Define the logic inside this method and only when the component is added to the DOM, then that will be executed.
It will get executed only once, in other words, mounting happens only once at the initial stage when component is rendered for the first time.

### shouldComponentUpdate

It takes two parameters, (next, current), if the current and next values are different, then the component will gets updated.
It re-renders the component with new values.

### componentDidUpdate(){}

After the re-rendering of the component, this method will be called

### componentWillUnmount(){}

It is like cleanup function in useEffect, after certain condition, disconnect from the resource.
