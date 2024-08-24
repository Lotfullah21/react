import { useState } from "react";
import useToggle from "./customHooks/useToggle";

const Toggle = () => {
	const { show, toggle } = useToggle(false);

	return (
		<div>
			<button className="btn" onClick={toggle}>
				Toggle
			</button>
			{show ? <h2>Hello from toggle</h2> : <h1>Nothing to show</h1>}
		</div>
	);
};
export default Toggle;
