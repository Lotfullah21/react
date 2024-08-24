import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default Counter;
