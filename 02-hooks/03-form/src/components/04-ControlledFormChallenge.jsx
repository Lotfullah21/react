import { useState } from "react";
import data from "./data";

const ControlledFormChallenge = () => {
	const [people, setPeople] = useState([...data]);
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			return;
		}
		const id = Date.now();
		const newUser = { id: id, name: name };
		setPeople([...people, newUser]);
		console.log(people);
		setName("");
		console.log("form submitted");
	};

	const handleRemove = (id) => {
		const newPeople = people.filter((person) => {
			return person.id !== id;
		});
		console.log(newPeople);
		setPeople(newPeople);
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
			<button type="submit" className="btn submit-btn">
				submit
			</button>
			{people.map((person) => {
				console.log("id", person.id);
				return (
					<>
						<h3>{person.name}</h3>
						<button onClick={() => handleRemove(person.id)}>remove </button>
					</>
				);
			})}
		</form>
	);
};

export default ControlledFormChallenge;
