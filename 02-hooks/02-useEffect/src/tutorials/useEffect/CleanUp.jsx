import { useState, useEffect } from "react";

const ToggleState = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div>
			{toggle && <New />}
			<button onClick={() => setToggle(!toggle)}>Toggle the state here</button>
		</div>
	);
};

const New = () => {
	useEffect(() => {
		console.log("From side effect");

		const hello = () => {};
		window.addEventListener("scroll", hello);

		//   clean up function
		() => {
			window.removeEventListener("scroll", hello);
		};
	}, []);
	return <h1>Hello </h1>;
};

export default ToggleState;

const data = [
	{
		name: "king",
		images: [
			{
				small: { url: "w.jpg" },
			},
		],
	},
	{
		name: "ahmad",
		id: 1,
	},
	{
		name: "king",
		lastName: "Emperor",
	},
];
