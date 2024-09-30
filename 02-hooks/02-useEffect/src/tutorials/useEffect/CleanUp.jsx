import { useState, useEffect } from "react";

const CleanUp = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div style={{ height: "110vh" }}>
			{toggle && <New />}
			<button onClick={() => setToggle(!toggle)}>Toggle the state here</button>
		</div>
	);
};

const New = () => {
	useEffect(() => {
		console.log("From side effect");

		const hello = () => {
			// scroll handling logic here
			alert("window scrolled");
		};
		window.addEventListener("scroll", hello);

		//   clean up function
		return () => {
			window.removeEventListener("scroll", hello);
		};
	}, []);

	return <h1>Hello</h1>;
};

export default CleanUp;
