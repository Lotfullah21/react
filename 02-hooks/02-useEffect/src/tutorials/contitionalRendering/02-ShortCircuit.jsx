import { useState } from "react";

const ShortCircuit = () => {
	// Falsy
	const [noName, setName] = useState("");
	// Truthy
	const [text, setText] = useState("Ahmad");

	return (
		<div>
			{" "}
			<>
				<h3>Truthy:{text || noName}</h3>
				<h3>Truthy:{noName || name}</h3>
				<h3>Truthy:{setText && "Stanford"}</h3>
				<h3>Falsy:{noName && name}</h3>
			</>
		</div>
	);
};
export default ShortCircuit;
