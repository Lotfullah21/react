import { useState } from "react";
import Counter from "./Counter";
import SubjectsList from "./SubjectsList";

const Wrapper = () => {
	const subjectsList = [
		{ name: "React", done: false },
		{ name: "Next-js", done: false },
		{ name: "Building Application", done: false },
	];

	const [subjects, setSubjects] = useState(subjectsList);

	return (
		<div>
			<SubjectsList
				subjects={subjects}
				setSubjects={setSubjects}></SubjectsList>
			<Counter subjects={subjects}></Counter>
		</div>
	);
};
export default Wrapper;
