import { useState } from "react";
const AddButton = () => {
	const [count, setCount] = useState(2);
	return (
		<>
			<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
			<h4>{count}</h4>
		</>
	);
};

const AddTextButton = () => {
	const [text, setText] = useState("");

	const handleText = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			<input value={text} placeholder="type..." onChange={handleText}></input>
			<p>Typed: {text}</p>
		</>
	);
};

const LocalState = () => {
	return (
		<>
			<AddButton></AddButton>
			<AddTextButton></AddTextButton>
		</>
	);
};

export default LocalState;
