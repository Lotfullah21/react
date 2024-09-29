## Goals

In this app, we will learn

- How to pass the states from parent to children components
- How to update the state values inside objects and arrays.

Why not `e.target.name: e.target.value`

```jsx
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
```

In JavaScript, when you're using an object property as a key inside an object, you need to use square brackets ([]) to dynamically access the key. Without the brackets, e.target.name would be interpreted as a literal key instead of the value of e.target.name
