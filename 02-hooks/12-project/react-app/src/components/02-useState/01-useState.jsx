import { useState } from "react";

const InputComponent = () => {
	const [text, setText] = useState("");

	const inputHandleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<input value={text} onChange={inputHandleChange}></input>
			<p>You are typing: {text}</p>
			<button onClick={setText("")}>Reset</button>
		</div>
	);
};
export default InputComponent;
