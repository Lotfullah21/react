# 1.

## Example-2

Update an object using `useState.`

```js
import { useState } from "react";
import { data } from "./data";

const Practice = () => {
	const [name, setName] = useState("Ayaan");
	const [age, setAge] = useState("24");
	const [place, setPlace] = useState("Canada");

	const handleClick = () => {
		setName("Aayuhs");
		setAge(29);
		setPlace("No where");
	};

	return (
		<div>
			<h2>{name}</h2>
			<h3>{age}</h3>
			<h4>{place}</h4>
			<button className="btn" onClick={handleClick}>
				click here
			</button>
		</div>
	);
};
export default Practice;
```

# 2

### Using an object

```js
import { useState } from "react";
import { data } from "./data";

const Practice = () => {
	const [person, setPerson] = useState({
		name: "Ayaan",
		age: "24",
		place: "Canada",
	});

	const handleClick = () => {
		setPerson({ name: "Aayush", age: "29", place: "No where" });
	};

	return (
		<div>
			<h2>{person.name}</h2>
			<h3>{person.age}</h3>
			<h4>{person.place}</h4>
			<button className="btn" onClick={handleClick}>
				click here
			</button>
		</div>
	);
};
export default Practice;
```

## useState gotcha

```js
import { useState } from "react";

const StateGotcha = () => {
	const [count, setCount] = useState(0);
	const updateCount = () => {
		setCount(count + 1); // 1
		console.log(count); // 0
	};
	return (
		<div>
			<h1>{count}</h1>
			<button className="btn" onClick={updateCount}>
				click here
			</button>
		</div>
	);
};
export default StateGotcha;
```

count value always stays one value behind the `setCount` value.

```js
setCount(count + 1); // 1
console.log(count); // 0
```

Now, what if we want to update the state immediately?
Pass the current state value to a function and return the updated one. By default, it is provided by react.

```js
const updateCount = () => {
	setCount((currentState) => {
		const newState = currentState + 1;
		console.log(newState); // 1
		return newState;
	});
};
```

It is not necessary to always get the latest value, but in some cases we might need them.
