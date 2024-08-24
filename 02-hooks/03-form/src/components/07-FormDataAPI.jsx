import { useState } from "react";

const FormDataAPI = () => {
	const [user, setUser] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		console.log("first", Object.fromEntries(formData.entries()));
		e.currentTarget.reset();
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h3>Controlled Inputs</h3>
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input type="text" id="name" name="name" className="form-input"></input>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					id="email"
					name="email"
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
					className="form-input"></input>
			</div>
			<button type="submit" className="btn submit-btn">
				submit
			</button>
		</form>
	);
};

export default FormDataAPI;
