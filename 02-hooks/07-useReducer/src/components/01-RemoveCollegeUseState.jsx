import { useState } from "react";
import universities from "../data/Data";

const RemoveCollegeUseState = () => {
	const [data, setData] = useState(universities);

	const handleRemove = (id) => {
		const updatedUniversities = data.filter((college) => college.id !== id);
		setData(updatedUniversities);
	};

	const resetHandle = () => {
		setData(universities);
	};

	const clearList = () => {
		setData([]);
	};
	return (
		<div>
			{data.map((college) => {
				const { name, course, id } = college;
				return (
					<div key={id}>
						<h4>{name}</h4>
						<h5>{course}</h5>
						<button onClick={() => handleRemove(id)} className="btn">
							Remove
						</button>
					</div>
				);
			})}

			{data.length < 1 ? (
				<button onClick={() => resetHandle()} className="btn btn-block">
					reset
				</button>
			) : (
				<button onClick={() => clearList()} className="btn">
					clear
				</button>
			)}
		</div>
	);
};
export default RemoveCollegeUseState;

// Important: as you are filter or map the data, remember to use the data which you setup in useState, not directly the imported universities.
