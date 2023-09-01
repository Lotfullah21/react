import { useState, useReducer } from "react";
import universities from "../data/Data";

const defaultState = {
  colleges: universities,
  bestColleges: true,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, colleges: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, colleges: universities };
  }
  if (action.type === REMOVE_ITEM) {
    let updatedUniversities = state.colleges.filter(
      (college) => college.id !== action.payload.id
    );
    return { ...state, colleges: updatedUniversities };
  }
  // if no matching dispatch type, we can return state as well
  throw new Error("no matching action type");
};

const RemoveCollege = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const resetHandle = () => {
    dispatch({ type: RESET_LIST });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  return (
    <div>
      {state.colleges.map((college) => {
        const { name, course, id } = college;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <h5>{course}</h5>
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        );
      })}

      {state.colleges.length < 1 ? (
        <button onClick={() => resetHandle()}>reset</button>
      ) : (
        <button onClick={() => clearList()}>clear</button>
      )}
    </div>
  );
};
export default RemoveCollege;

// Important: as you are filter or map the data, remember to use the data which you setup in useState, not directly the imported universities.
