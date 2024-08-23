import { useState } from "react";

const UseObjectState = () => {
	const [name, setName] = useState("MIT");
	const [course, setCourse] = useState("Computer Science");
	const [location, setLocation] = useState("Boston,Massachuset");

	const showCollege = () => {
		setName("Stanford");
		setCourse("Artificial Intelligence");
		setLocation("San Francisco, California");
	};

	return (
		<>
			<div className="container">
				<h2>{name}</h2>
				<h4>{course}</h4>
				<h5>{location}</h5>
			</div>
			<button onClick={showCollege} className="btn">
				Stanford
			</button>
		</>
	);
};

export default UseObjectState;
