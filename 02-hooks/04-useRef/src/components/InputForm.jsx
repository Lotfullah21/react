import { useState, useRef, useEffect } from "react";

const InputForm = () => {
	const [value, setValue] = useState();
	const refValue = useRef(null);

	console.log(refValue);
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = refValue.current.value;
		console.log(name);
	};

	useEffect(() => {
		console.log(refValue);
	});
	const handleChange = (e) => {};

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="title">Submit the form</h1>
				<div>
					<label htmlFor="name">name</label>
					<input
						type="text"
						id="name"
						value={value}
						name="name"
						ref={refValue}
						onChange={handleChange}></input>
				</div>
				<button>Submit</button>
			</form>
			<h2> value:{value}</h2>
		</>
	);
};

export default InputForm;
