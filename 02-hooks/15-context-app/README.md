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
