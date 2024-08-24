import { useState } from "react";

const ControlledForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h3>Controlled Inputs</h3>
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
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
					onChange={(e) => setEmail(e.target.value)}
					className="form-input"></input>
			</div>
			<button type="submit" className="btn submit-btn">
				submit
			</button>
		</form>
	);
};

export default ControlledForm;
