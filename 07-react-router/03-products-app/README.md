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

## uuid()

Every time we load the application,

```json
	{
		id: uuidv4(),
		name: "Davidoff Espresso 57",
		price: 12.99,
		rating: 4.8,
		discount: 10,
		company: "Davidoff",
		imgSrc: "https://example.com/davidoff-espresso-57.jpg",
	},
```

in the above snippet, we will get a different id, either save to a database, or hardcode them, because when trying to access them in single page, the ids would not match to the `id` we navigated from.

## How to navigate to a single page.

- Define the route for single product
- In products card, add the route along with the id
  `/productsCard`
  ```jsx
  	const handleSingleProduct = () => {
  	navigate(`/product-details/${id}`);
  ```
- In routes, define a place holder for the expected id to grab it using `useParams`

```jsx
const params = useParams();
const { productId } = params;
```

- In single card, grab the id using `useParams` hook
- Based on the id, look for the product in products
  ```jsx
  	{
  			path: "/product-details/:productId",
  			element: <SingleProduct></SingleProduct>,
  		},
  ```
