import { useState } from "react";
import { data } from "./data";

const Practice = () => {
	const [person, setPerson] = useState({
		name: "Ayaan",
		age: "24",
		place: "Canada",
	});

	const handleClick = () => {
		setPerson({ name: "Aayush", age: "29", place: "No where" });
	};

	return (
		<div>
			<h2>{person.name}</h2>
			<h3>{person.age}</h3>
			<h4>{person.place}</h4>
			<button className="btn" onClick={handleClick}>
				click here
			</button>
		</div>
	);
};
export default Practice;
