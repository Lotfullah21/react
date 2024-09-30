## Checking if item in cart

##### Using .some

```jsx
//  Function to check if an item is in the cart,  Use 'some' to return a boolean
const itemInCart = (id) => cart.some((cartItem) => cartItem.id === id);
```

`cart.some((cartItem) => cartItem.id === id)` will return true if there is at least one item in the cart with the specified id, and false otherwise.

##### Using .find

we can use `.find` method instead of `.some` to check if an item is in the cart. Using `.find` will return the found item itself or undefined if it’s not found, which allows you to check for the presence of the item.

```jsx
// Function to check if an item is in the cart
const itemInCart = (id) => {
	const foundItem = cart.find((cartItem) => cartItem.id === id);
	// Return true if found, false otherwise
	return foundItem !== undefined;
};
```

Or

```jsx
const itemInCart = (id) => !!cart.find((cartItem) => cartItem.id === id);
```

Using the `!!` operator is a common pattern in JavaScript to convert values to booleans

#### How !! Works

First Exclamation Mark (!): The first ! negates the truthiness of the value. If the value is truthy, ! will convert it to false; if the value is falsy, it will convert it to true.

Second Exclamation Mark (!): The second ! negates the result of the first negation. This effectively converts the value back into its original boolean representation:

Truthy values become true.
Falsy values become false.

We cannot use filter, because the empty array is treated as truthy, hence all items will be truthy.

From action types, always return the complete state apart from why you are changing in the original state.

```jsx
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
```

# Filtering project

## Setting the values of the states using dispatch actions.

`./filterReducer`

```jsx
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
```

`./FilterNavbar.jsx`

```jsx
const handlePrice = (e) => {
	dispatchFilterAction({ type: "PRICE", payload: e.target.value });
};
const handleRating = (e) => {
	dispatchFilterAction({ type: "RATING", payload: e.target.value });
};
const handleProductName = (e) => {
	dispatchFilterAction({ type: "PRODUCT_NAME", payload: e.target.value });
};
```

`./FilterNavbar.jsx`

```jsx
		<input
				name="price"
				type="number"
				placeholder="price..."
				onChange={handlePrice}></input>
			<input
				name="rating"
				type="text"
				placeholder="rating..."
				onChange={handleRating}></input>
			<input
				type="text"
				placeholder="product name..."
				onChange={handleProductName}></input>
		</nav>
```

## Filtering

Here, you might be getting a question what if the price is not provided, then `filteredByPrice` would be empty and we won't get any item,

```jsx
const filteredByPrice = products.filter((product) =>
	filterState.price ? product.price <= filterState.price : products
```

But the fact is we have used ternary operator that if price is not provided, the filteredByPrice will be our `original products`.

```jsx
const filteredByPrice = filterState.price
	? products.filter((product) => product.price <= filterState.price)
	: products;

const filteredByRating = filterState.rating
	? filteredByPrice.filter((product) => product.rating >= filterState.rating)
	: filteredByPrice;

const filteredByName = filterState.itemName
	? filteredByPrice.filter((product) =>
			product.name.toLowerCase().includes(filterState.itemName.toLowerCase())
	  )
	: filteredByRating;
```

We can use `let` as well.

```jsx
// Initialize filtered products from the original product list
let filteredProducts = products;

// Apply price filter
if (filterState.price) {
	filteredProducts = filteredProducts.filter(
		(product) => product.price <= filterState.price
	);
}

// Apply rating filter
if (filterState.rating) {
	filteredProducts = filteredProducts.filter(
		(product) => product.rating >= filterState.rating
	);
}

// Apply name filter
if (filterState.itemName) {
	filteredProducts = filteredProducts.filter((product) =>
		product.name.toLowerCase().includes(filterState.itemName.toLowerCase())
	);
}
```

## Why useReducer?

The useReducer hook in React provides an alternative to the useState hook for managing state in functional components. There are several reasons why you might choose to use useReducer over useState.

`Complex State Logic`: If your component's state logic is complex and involves multiple sub-values or requires intricate state transitions, useReducer can offer a more organized approach. By centralizing state transitions within a reducer function, you can manage complex state logic more efficiently.

`Predictable State Updates`: useReducer follows the reducer pattern, which enforces a strict pattern for updating state. This predictability can make it easier to reason about state changes, especially in larger applications where state management can become convoluted.

`Component Composition`: Reducers can be composed, allowing you to break down complex state management into smaller, more manageable pieces. This promotes code reusability and maintainability by encapsulating related state logic within separate reducer functions.

`Optimized Performance`: While the performance difference between useReducer and useState is generally negligible for small-scale applications, useReducer can offer performance optimizations in certain scenarios. Since useReducer relies on shallow comparison to determine if the state has changed, it can optimize re-renders by avoiding unnecessary updates.

`Sharing State Logic`: If multiple components need to share the same state logic, useReducer allows you to define the state logic once in a reducer function and reuse it across different components using React's context API or custom hooks.

[Why-Use-Reducer](https://www.geeksforgeeks.org/batch/react-js-390-april/track/usereducer-hook/article/MTE3ODQ%3D)
