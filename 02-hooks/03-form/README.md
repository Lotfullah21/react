## DOM

- a tree like structure that represents HTML documents, it uses nodes to describe each part of the document

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
const ControlledForm = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const newVal = e.target.value;
    setValue(newVal);
    console.log(newVal);
  };
  return (
    <form>
      <label>Click</label>
      <input value={value} onChange={handleChange} type="text" />
      <h3>{value}</h3>
    </form>
  );
};
export default ControlledForm;
```

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
            name="name"
          ></input>
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
