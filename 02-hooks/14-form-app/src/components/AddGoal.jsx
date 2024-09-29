import { useState } from "react";
const AddGoals = ({ onAddGoal }) => {
	const [formData, setFormData] = useState({ goal: "", due: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddGoal(formData);
		setFormData({ goal: "", due: "" });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="goal"
				value={formData.goal}
				placeholder="goal"
				onChange={handleChange}></input>
			<input
				type="text"
				name="due"
				value={formData.due}
				placeholder="by..."
				onChange={handleChange}></input>
			<button>add </button>
		</form>
	);
};
export default AddGoals;
