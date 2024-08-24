import { useState } from "react";
const subjects = [
	"machine learning",
	"deep learning",
	"python",
	"java script",
	"algorithms",
];
const CheckBoxForm = () => {
	const [free, setFree] = useState(true);
	const [subject, setSubjects] = useState("python");
	const handleChange = (e) => {
		console.log(e.target.checked);
		setFree(e.target.checked);
		// setFree(!free);
	};

	const handleSubjects = (e) => {
		setSubjects(e.target.value);
	};
	return (
		<form className="form">
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					free of cost
				</label>
				<input
					type="checkbox"
					value={free}
					onChange={handleChange}
					checked={free}></input>
			</div>
			<div className="form-row">
				<label htmlFor="subjects" className="form-label">
					subjects
				</label>
				<select onChange={handleSubjects} value={subject} id="subjects">
					{subjects.map((subject) => {
						return <option key={subject}>{subject}</option>;
					})}
				</select>
			</div>
			<button type="submit" className="btn submit-btn">
				submit
			</button>
		</form>
	);
};
export default CheckBoxForm;
