# useEffect

Side effects in React refer to actions that occur outside of the regular component rendering cycle, such as data fetching, subscribing to external services, manipulating the DOM, and so on. The useEffect hook is used to manage these side effects in a controlled and efficient manner.

This function will run after the component has rendered.

### Why useEffect

In some cases, we might need to always use `useState` or using `useState` causes infinite rendering.
The way `useState` works the initial rendering will happen the moment content is loaded, and every time the state of our value changes, the re-rendering happens which sometimes causes problems. Always, we don't want re-rendering of our component, the way to control when the re-rendering should happen is to use `useEffect.`

```js
import { useState } from "react";

const HelloUseEffect = () => {
	const [count, setCount] = useState(0);

	const invokeMe = () => {
		console.log("Hello there");
	};
	invokeMe();
	// to handle click.
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<h2>Hello states</h2>
			<h1>{count}</h1>
			<button onClick={handleClick} className="btn">
				Increment
			</button>
		</>
	);
};

export default HelloUseEffect;
```

In the above code, the `invokeMe` function will be invoked once in the initial mounting, and also every time the state value (`count`) changes, the `invokeMe` function will be invoked as well.

We also can say that every time, the application is re-rendered, the function gets invoked.

#### Infinite re-rendering

```js
import { useState } from "react";

const HelloUseEffect = () => {
	const [count, setCount] = useState(0);

	const invokeMe = () => {
		setCount(count + 1);
	};
	//
	invokeMe();
	// to handle click.
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<h2>Hello states</h2>
			<h1>{count}</h1>
			<button onClick={handleClick} className="btn">
				Increment
			</button>
		</>
	);
};

export default HelloUseEffect;
```

Now, the re-rendering will happen infinite number of times.

### Setting up Effects:

You define the useEffect hook inside your functional component. It takes two arguments:

1. `first argument`: A callback function that contains the code for the side effect.
2. `second argument`: An array of dependencies that determine when the effect should run(optional)

## Running the Effect:

When the component is rendered, the function inside `useEffect` is executed. It might perform tasks like fetching data, updating the DOM, or setting up event listeners.
The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.
In addition, depending on our configuration via the dependencies array, our effects can also run when certain state variables or props change.

```js
import { useState, useEffect } from "react";

const HelloFromUseEffect = () => {
	const [init, setInit] = useState(0);

	function regular() {
		console.log("from Regular");
	}
	regular();

	useEffect(() => {
		console.log("from useEffect");
	});

	return (
		<div>
			<h1>{init}</h1>
			<button
				className="btn"
				onClick={() => {
					setInit(init + 1);
				}}>
				Increment
			</button>
		</div>
	);
};

export default HelloFromUseEffect;
```

In the above snippet, all the functions like `regular(), useEffect()` will be invoked every time we update the state values.

why `useEffect` behave same as `regular`, generally it does unless we pass the `dependency array` which determines when to invoke the function.

```js
useEffect(() => {
	console.log("from useEffect");
}, []);
```

Now, it will be invoked only for the first time and that is the initial rendering and the `regular()` will be invoked every time we update the sate value.
We are saying, regardless of what happens to our app, do not invoke the useEffect except the first time.

## Cleaning Up:

If the effect requires cleanup, such as unsubscribing from a subscription or removing event listeners, you can return a cleanup function from the effect.

Some side effects may need to clean up resources or memory that is not required anymore, avoiding any memory leaks that could slow down your applications.

For example, you may want to set up a subscription to an external data source. In that scenario, it is vital to perform a cleanup after the effect finishes its execution.

```jsx
function LittleLemonChat(props) {
	const [status, chatStatus] = useState("offline");

	useEffect(() => {
		LemonChat.subscribeToMessages(props.chatId, () => setStatus("online"));

		return () => {
			setStatus("offline");
			LemonChat.unsubscribeFromMessages(props.chatId);
		};
	}, []);

	// ...
}
```

[useEffect](https://www.coursera.org/learn/advanced-react/supplement/LhsqC/what-is-the-useeffect-hook)

## Dependencies Array:

The second argument of useEffect is an array of dependencies. If this array is provided, the effect will run whenever any of the dependencies change. If the array is empty(`[]`), the effect runs only once, similar to componentDidMount in class components.

```js
const MultipleEffect = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(10);
	useEffect(() => {
		console.log("Hello From first useEffect");
	}, [value]);

	useEffect(() => {
		console.log("From second useEffect");
	}, []);

	return (
		<div className="container">
			<div>
				<h1>{value}</h1>
				<button
					onClick={() => {
						setValue(value + 1);
					}}
					className="btn">
					Increment
				</button>
			</div>

			<div>
				<h1>{secondValue}</h1>
				<button
					onClick={() => {
						setSecondValue(secondValue + 1);
					}}
					className="btn">
					Increment
				</button>
			</div>
		</div>
	);
};

export default MultipleEffect;
```

```js
useEffect(() => {
	console.log("Hello From first useEffect");
}, [value]);

useEffect(() => {
	console.log("From second useEffect");
}, []);
```

Now, the first useEffect will get invoked every time we update the state of the first value because of passing `[value]` in dependency array.
The second one will gets invoked only at the first time we render our components.

## Rules

- 1. Do not use hooks inside a block

```js
import { useState } from "react";

const HelloUseEffect = () => {
	const [x, setX] = useState(false);
	// It is wrong we cannot use hooks inside conditional blocks.
	if (x) {
		setX(true);
	}

	return (
		<>
			<h2>Hello states</h2>
			<h1>{count}</h1>
			<button onClick={handleClick} className="btn">
				Increment
			</button>
		</>
	);
};

export default HelloUseEffect;
```

- 2. we cannot use async fn as a callback to the useEffect, but we can use it inside the callback
-

```js
useEffect(async () => {}, []);
useEffect(() => {
	const fetchData = async () => {
		const data = await fetch(ulr);
		const response = await data.json();
		return response;
	};
	fetchData();
}, []);
```

- 3. Do not add `useEffect` after multiple returns, becaus if one of the condition is meet, you are not going to reach to `useEffect`.

```js
if (x > 20) {
	return True;
}
// Do not add the use after a condition with return statement.
useEffect(() => {
	const fetchData = async () => {
		const data = await fetch(ulr);
		const response = await data.json();
		console.log(response, data);
		return response;
	};
	fetchData();
}, []);
```

## Use cases

One of the best use cases here would be fetching data from an external API, if we add the fetching functionality inside a regular function, every time we render the component or change the state value, we are making a call to that `API` which is not a good practice. Because most of the API's have limits on how many times we can make a request to that server.

When JavaScript uses the fetch function it is delegating duties to an external API so that it can continue its process. This is known as asynchronous JavaScript

```js
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";
const FetchUsersWithEffects = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const FetchUser = async () => {
			const response = await fetch(url);
			const data = await response.json();
			setUsers(data);
		};
		FetchUser();
	}, []);

	return (
		<>
			<h1>Data Fetched</h1>
			{users.map((user) => (
				<article key={user.id}>
					<img src={user.avatar_url}></img>
					<p>office</p>
				</article>
			))}
		</>
	);
};

export default FetchUsersWithEffects;
```

In the above snippet, we are making a request only once.

### Normal setup for fetching the data using fetch

```js
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";
const FetchUsersWithEffects = () => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const FetchUser = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					setError(true);
					setLoading(false);
					return;
				}
				const data = await response.json();
				console.log(data);
				setUsers(data);
			} catch (error) {
				//   if error,put this condition to true
				setError(true);
			}
			// once fetching done,set the loading to false
			setLoading(false);
		};
		// It is crucial to call the fetchUser function after try-catch block.
		FetchUser();
	}, []);

	if (error) {
		return <h1>Error....</h1>;
	}
	if (loading) {
		return <h1>Loading....</h1>;
	}
	return (
		<>
			<h1>Data Fetched</h1>
			{users.map((user) => (
				<article key={user.id}>
					<img src={user.avatar_url}></img>
					<h5>{user.login}</h5>
					<a href={user.html_url}>Profile</a>
				</article>
			))}
		</>
	);
};

export default FetchUsersWithEffects;
```

`fetch()` does not treat `404` as an error, hence we cannot rely solely on `try-catch` block, But we can get the status of the response using `response.ok`, if the response is `Okay`, we say no error, other wise there is an error.
`.ok` is a property of response object.s

## map

The map() function returns a new array with the results of applying the provided function to each element.

Keep in mind that the original array remains unchanged. The map() function doesn't modify the original array; it produces a new array with the transformed values.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
	return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

# !Important

for every `{}`, we are adding a block of code,which means that It should return something,

```js
{
  return (
	<div>
     user.map((person) => {
		// It should return something or we should return something.
    return (
        <article key={person.id}>
          <h2>{person.login}</h2>
          <img src={person.avatar_url}></img>
        </article>
    );
  });
</div>
  )
}
```

We added another `{}` in map block, which we need to another return statement inside this block, otherwise it will return nothing.

In JavaScript's `arrow functions` with a single expression, like the one we're using within `.map()`, the parentheses () around the expression implicitly indicate the return value.

```js
return (
	<section>
		{users.map((user) => (
			<article key={user.id}>
				<h2>{user.login}</h2>
				<img src={user.avatar_url} alt={`${user.login} avatar`} />
			</article>
		))}
	</section>
);
```

## Falsy

It is a falsy if it results to a false value in boolean context.

```js
0;
(" ");
NaN;
undefined;
null;
false;
```

Everything in javascript except above values are truthy.

## Truthy

It is a truthy if it is evaluated to true when using in boolean context.

```js
[arrays]
{objects}
(all other values)
```

## And operator

in `a&&b`, if `a` is truthy, we will return `b`.
if `a` is falsy, we will return `a`.

```js
const text="KING"
<h1>
	{text}&&(
	<div>
		<h1>Hello from falsy</h1>
		<h2>Hello from x</h2>
	</div>)
</h1>
```

It will return

```js
<div>
	<h1>Hello from falsy</h1>
	<h2>Hello from x</h2>
</div>
```

#### Usage:

Using this operator, we can control what return based on value of the first expression.
For instance, we want to render a component if the user exists.

```js

<{user} && <Component name={name}>>

```

We will return the component only if the user exists.

because the first one is truthy.

in `a||b`, if a is truthy, we will return `a`.
if `a` is falsy, we will return `b`.

```

```

## Ternary

```js
Expression? If expression is True:If expression is False

```

We evaluate or return the statement after `?` if the expression is true, otherwise return or evaluate the expression after `:`.

```js
toefl ? "Admitted" : "Rejected";
```

In the above example, if `toefl` is evaluated to `true`, it will return `Admitted`, otherwise, it will return `Rejected`.

## Few good extensions to have.

<a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">code spell checker</a>

## Getting an object if it does not exist?

```js
const data = [
	{
		name: "king",
		images: [
			{
				small: { url: "w.jpg" },
			},
		],
	},
	{
		name: "ahmad",
		id: 1,
	},
	{
		name: "king",
		lastName: "Emperor",
	},
];
```

For the above data, if we want to use map method and destructure it, we will have a bug that all the items does not have the images, how to handle this situation:

Generally, there are two ways to handle this problem.

## 1. Using and operators

```js
const img = images && images[0] && images[0].small && images[0].url;
```

What we are saying is that
If images exists, give me images[0], if images[0] exists, give me the smaller and so on until we reaches the end point and it returns `images[0].url`.

## 2. Optional Chaining

It makes our code shorter,

```js
const img = images?.[0]?.small?.url;
```

In case the property does not exist in both of the methods, we will get undefined.
We can set some default images and when the image does not exist, we use that image as our image to show to the user.

```js
const img = images?.[0]?.small?.url || ourDefaultImage;
```
