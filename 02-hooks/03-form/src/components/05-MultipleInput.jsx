import { useState } from "react";

const MultipleInput = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		setUser({
			name: "",
			email: "",
			password: "",
		});
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
					value={user.name}
					name="name"
					onChange={handleChange}
					className="form-input"></input>
			</div>
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
