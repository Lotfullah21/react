export const initialState = {
	cart: [],
};
export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, action.payload] };

		case "ITEM_IN_CART":
			const itemInCart = state.cart.some(
				(item) => item.id === action.payload.id
			);
			return { ...state, itemInCart };

		case "REMOVE":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		default:
			return state;
	}
};
