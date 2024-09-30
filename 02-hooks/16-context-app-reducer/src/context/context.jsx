import { useContext, createContext, useReducer, act } from "react";
import { reducer, initialState } from "../reducer/cartReducer";
import { filterReducer, filterInitialState } from "../reducer/filterReducer";

const MyContext = createContext();

const ContextApp = ({ children }) => {
	const [state, dispatchCartAction] = useReducer(reducer, initialState);
	const [filterState, dispatchFilterAction] = useReducer(
		filterReducer,
		filterInitialState
	);

	return (
		<MyContext.Provider
			value={{ state, dispatchCartAction, filterState, dispatchFilterAction }}>
			{children}
		</MyContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(MyContext);
};

export default ContextApp;
