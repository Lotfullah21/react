import { useState } from "react";

const Practice = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(toggle ? false : true);
	};

	return (
		<div>
			{/* <button onClick={handleToggle} className="btn"> */}
			<button onClick={() => setToggle(!toggle)} className="btn">
				toggle
			</button>
			{toggle ? (
				<Component age={20}></Component>
			) : (
				<h1>Nothing to show, toggle value is false</h1>
			)}
		</div>
	);
};

const Component = ({ age }) => {
	return <h1>You are {age} years old</h1>;
};
export default Practice;
