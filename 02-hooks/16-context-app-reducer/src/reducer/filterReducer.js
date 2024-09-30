export const filterInitialState = {
	rating: "",
	price: "",
	itemName: "",
};

export const filterReducer = (state, action) => {
	switch (action.type) {
		case "PRICE":
			return { ...state, price: action.payload };

		case "RATING":
			return { ...state, rating: action.payload };

		case "PRODUCT_NAME":
			return { ...state, itemName: action.payload };
		default:
			return { state };
	}
};
