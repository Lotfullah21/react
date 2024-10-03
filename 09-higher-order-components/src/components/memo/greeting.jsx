import { memo } from "react";

const Greeting = ({ name }) => {
	console.log("component re-rendered");
	return (
		<div>
			<h2>Hello {name}</h2>
		</div>
	);
};
export default memo(Greeting);
