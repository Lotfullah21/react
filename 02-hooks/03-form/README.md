# Form

it is used to create interactive sections on a web page that allow users to input data and submit it to a server for processing.

```js
<form>
	<label>
		Name:
		<input type="text" name="name" />
	</label>
	<input type="submit" value="Submit" />
</form>
```

in React it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

### Controlled Components

In HTML, form elements such as 'input', 'textarea', and 'select' typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

it offers a declarative application programming interface (API) which gives the full access to control the component.
Here, the form data is controlled by component's state
we control the input via state values.
we use controlled components in React in order to have more control over the forms in an application you are creating.
A combination of local state and the value prop is needed to create a controlled component.

Every time you type a new character, the handleChange function is executed. It receives the new value of the input,

#### Advantages

- Instant validation per field

- Disabling the submit button unless all fields have valid data

- Enforcing a specific input format, like phone or credit card number
- Enforcing a specific input format
- Several inputs for one piece of data
- Dynamic inputs

```js
const handleChange = (e) => {
	const name = e.target.name;
	const value = e.target.value;
	console.log(name);
	console.log(value);
};
```

`name` and `value` are the two most important properties we have access to.

#### value:

It is the input from the user.

#### name:

We can have access to the values entered by each input fields using name property. To work with this, name property should be added to our input fields.

```js
import { useState } from "react";

const MultipleInput = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
	};
	return (
		<form className="form">
			<h3>Controlled Inputs</h3>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={user.email}
					onChange={handleChange}
					className="form-input"></input>
			</div>
			<div className="form-row">
				<label htmlFor="password" className="form-label">
					password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					value={user.password}
					onChange={handleChange}
					className="form-input"></input>
			</div>
			<button type="submit" className="btn submit-btn">
				submit
			</button>
		</form>
	);
};

export default MultipleInput;
```

Here, `name` property helps us to know from where we are getting the inputs.

```js
const handleChange = (e) => {
	setUser({ ...user, [e.target.name]: e.target.value });
};
```

Using `[e.target.name]: e.target.value }`, dynamically we can save the set the data for each name.

```js
import { useState } from "react";

const ControlledForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	return (
		<form className="form">
			<h3>Controlled Inputs</h3>
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={handleName}
					className="form-input"></input>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={handleEmail}
					className="form-input"></input>
			</div>
			<button type="submit" className="btn submit-btn">
				submit
			</button>
		</form>
	);
};

export default ControlledForm;
```

One other way to handle the values are directly adding `onChange={(e)=>setEmail(e.target.value)}` to the input instead of adding one handler function for each input.

```js
		<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e)=>setName(e.target.value)}
					className="form-input"></input>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					bonChange={(e)=>setEmail(e.target.value)}
			className="form-input"></input>
			</div>
```

## FormData() API:

The FormData object in JavaScript is used to easily construct a set of key/value pairs representing form fields and their values, which can then be sent using fetch, XMLHttpRequest, or other methods. It's particularly useful when you need to send form data to a server, especially when dealing with file uploads.

To able to send the data using `FormData`, we need to have `name` attribute in our input fields.

There is an awesome method provided by `FormData`, `formData.entries()`
that gives the form data and that is an array.

```plaintext
['name', 'ahmad']
['email', 'andishmandlotfullah21@gmail.com']
['password', '13242']
```

Usually, we submit the data in the object form and to convert the array to objects, we use `Object.fromEntries(formData)`

### Object.fromEntries():

a method that transforms a list of key-value pairs into an object

```js
console.log([...formData.entries()]);
{name: 'ahmad', email: 'andishmandlotfullah21@gmail.com', password: 'king'}
```

The FormData object in JavaScript is used to easily construct a set of key/value pairs representing form fields and their values, which can then be sent using fetch, XMLHttpRequest, or other methods. It's particularly useful when you need to send form data to a server, especially when dealing with file uploads.

## Note

```js
// Safest and clearest approach
const obj = Object.fromEntries(formData.entries());
console.log("first", obj); // Outputs the object as expected

// This might work in modern environments, but not guaranteed in all cases
const objDirect = Object.fromEntries(formData);
console.log("second", objDirect); // Outputs the same object, but less reliable across environments
```

## FormData.entries():

This explicitly returns an iterator of key-value pairs (as [key, value] arrays). This is the standard and most reliable way to convert FormData to an object.

## FormData directly:

In modern implementations, FormData itself may also be iterable, allowing direct use in methods like Object.fromEntries() without explicitly calling .entries(). This behavior, however, is somewhat dependent on the environment and may not be consistent across all browsers or older environments.

## unControlled Components

uncontrolled inputs are like standard html forms.
Uncontrolled components are the simplest way to implement form inputs.
DOM handles form data unlike controlled one which component's state handle the data.

```js
const Form = () => {
	const inputRef = useRef(null);
	const handleSubmit = () => {
		const inputValue = inputRef.current.value;
		// Do something with the value
	};
	return (
		<form onSubmit={handleSubmit}>
			<input ref={inputRef} type="text" />
		</form>
	);
};
```

#### value

- a special property that determines the content of the element
- to use a controlled component, we use the combination of local state and value prop.
- ### onChange callback
  - to get the value using event object which represents the action that just toke place.
  - (event.target.value) to get access to the value for every key stroke.
- ### onSubmit
  - use this property inside form element to do something while submitting the form

## Component

- it is a function that returns JSX, JSX is a syntax extension of JavaScript

#### Plain HTML Form

```js
const Form = () => {
	return (
		<form>
			<fieldset>
				<div className="field">
					<label>Name: </label>
					<input type="text" placeholder="Name" name="name"></input>
				</div>
				<button type="submit">Submit</button>
			</fieldset>
		</form>
	);
};
```

#### Steps to convert a plain HTML form to controlled one

<ol>
<li>add  local state variables inside the component.</li>
<li>HookUp the state values to the input via two props <strong>value</strong>: to turn our input into a controlled one. 
<strong>onChange</strong>: to receive the changes and update the state of the input. </li>
<li>add the <strong>onSubmit</strong> to form tag to control the form submission</li>
<li></li>
<li></li>
</ol>

```js
import { useState } from "react";
const Form = () => {
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		setText("");
		console.log("Form Submitted.");
	};
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<div className="field">
					<label>Name: </label>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type="text"
						placeholder="Name"
						name="name"></input>
				</div>
				<button disabled={!text} type="submit">
					Submit
				</button>
			</fieldset>
		</form>
	);
};
export default Form;
```

#### Cool Feature

<code><button disabled={!text} type="submit"></code>
if the input text is empty we cannot submit the form.
or in another words, no text, no button to submit.

## Key

- keys are identifiers that help React determine which elements have added,removed or changed.
- we use keys to identify and distinguish between elements
- Keys instruct React about whether a specific element’s internal state should be preserved or not.
- Keys instruct React how to treat a specific element when an update occurs.
- at last,it is all about dom manipulation, if we do not use keys, our app will be confused and does extra work to manipulate the dom.
- keys should be unique.
- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.
  https://react.dev/learn/rendering-lists#where-to-get-your-key

## Map

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

- we can manipulate list objects using map method, it will take an array as input and will apply some transformation on each element.
- the return list will be the same length as original array.

## DOM

A tree like structure that represents HTML documents, it uses nodes to describe each part of the document
