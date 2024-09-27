## Spread operator ...

It is a powerful feature in JavaScript that allows us to expand our iterable elements like arrays,objects and strings.
by expanding, we mean that we can take individual element of the iterable and put it into other iterables or use it as an argument to a function.
for instance, we take an array and using spread operator, put it inside an object.
By iterable, we mean data structures that can be iterated over its elements.

#### Common use case

##### Copying

```js
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // [1,2,3]
```

##### Merging

```js
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const mergedObject = { ...obj1, ...obj2 }; // Merges objects { name: 'John', age: 30 }
```

##### Modifying

```js
const copiedArray = [...originalArray, 12, 0]; // [1,2,3,12,0]
```

#### Function Arguments

```js
function add(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];
const sum = add(...numbers); // Equivalent to add(1, 2, 3)
```

##### String Spread

```js
const text = "Hello";
const charArray = [...text]; // Converts the string to an array ['H', 'e', 'l', 'l', 'o']
```

## Spread operator in React

it is often used for array and object destructuring, it is used for managing states and properties.

##### Common use cases

### Spreading props

```js
const Parent = () => {
	const info = {
		name: "HoshmandLab",
		subjects: {
			AI: "Artificial Intelligence",
			ML: "Machine Learning",
		},
	};

	return <Child {...info}></Child>;
};

const Child = ({ name, subjects }) => {
	return (
		<div>
			<h1>{name}</h1>
			<p>{subjects.ML}</p>
			<p>{subjects.AI}</p>
		</div>
	);
};

export default Parent;
```

if it was not for "(...)", we had to write manually all the object properties while passing the prop.

```js
const Button = ({ type, children, ...buttonProps }) => {
	const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
	console.log(type);
	return (
		<button className={`Button ${className}`} {...buttonProps}>
			{children}
		</button>
	);
};

const LoginButton = ({ type, children, ...buttonProps }) => {
	return (
		<Button type="secondary" {...buttonProps}>
			{children}
		</Button>
	);
};

const ButtonContainer = () => {
	return (
		<div className="buttonContainer">
			<header>HoshmandLab</header>
			<Button
				type="primary"
				onClick={() => {
					alert("Signing up");
				}}>
				Sign up
			</Button>
			<LoginButton
				type="secondary"
				onClick={() => {
					alert("Login in");
				}}>
				Login
			</LoginButton>
		</div>
	);
};

export default ButtonContainer;
export { LoginButton };
```

### {...buttonProps}

we use this, so that even if we do not mention the properties passed by parent explicitly, just by adding this we can inherit all of those properties.
for instance in bellow snippet, even though we did not passed the "onClick" to the "LoginButton" still we had access and applied that property to our button.
the order which we pass that is also important.

```js
const LoginButton = ({ type, children, ...buttonProps }) => {
	return (
		<Button
			type="secondary"
			{...buttonProps}
			onClick={() => alert("Hello LOGIN")}>
			{children}
		</Button>
	);
};
```

due to the fact that we wrote "{...buttonProps}" before "onClick" it will override the parent one and the alert message will be "Hello LOGIN".

```js
const LoginButton = ({ type, children, ...buttonProps }) => {
	return (
		<Button
			type="secondary"
			onClick={() => alert("Hello LOGIN")}
			{...buttonProps}>
			{children}
		</Button>
	);
};
```

in the above case, due to ordering importance, we will get "Login in" as the props will override the "onClick" property which had been written in Button.

## Note

order of spread is !important here.

#### Array destructuring

Using ES6, we can destructure an array and store the arrays values into variables

```jsx
const courses = ["ai", "ml", "dl"]
const [artificial-intelligence, machine-learning, deep-learning]
```
