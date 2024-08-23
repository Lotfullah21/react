import { useState, useEffect } from "react";

const HelloFromUseEffect = () => {
	const [init, setInit] = useState(0);

	function regular() {
		console.log("from Regular");
	}
	regular();

	useEffect(() => {
		console.log("from useEffect");
	}, []);

	return (
		<div>
			<h1>{init}</h1>
			<button
				className="btn"
				onClick={() => {
					setInit(init + 1);
				}}>
				Increment
			</button>
		</div>
	);
};

export default HelloFromUseEffect;
