import { useState } from "react";
import Greeting from "./greeting";
const Memo = () => {
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	return (
		<div className="memo-container">
			<h1>Memoization </h1>
			<input
				value={name}
				placeholder="Name..."
				onChange={(e) => setName(e.target.value)}></input>
			<input
				value={city}
				placeholder="College..."
				onChange={(e) => setCity(e.target.value)}></input>

			<Greeting name={name}></Greeting>
		</div>
	);
};
export default Memo;
