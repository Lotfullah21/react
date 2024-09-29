import { useState } from "react";

const ToDo = () => {
	const [todo, setTodo] = useState("");
	const [formData, setFormData] = useState([]);
	const handleInputChange = (e) => {
		setTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo.trim() === "") {
			throw new Error("input field should not be empty");
		}
		setFormData([
			...formData,
			{ id: Date.now(), text: todo, isCompleted: false },
		]);
		setTodo("");
	};

	const handleRemove = (id) => {
		const newList = formData.filter((item) => item.id !== id);
		setFormData(newList);
	};
	const handleCompleted = (id) => {
		const newTasks = formData.map((task) =>
			task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
		);
		setFormData(newTasks);
	};

	return (
		<div>
			<h1>To do list</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={todo}
						onChange={handleInputChange}
						placeholder="Add your to do here..."
						required></input>
					<button> add </button>
				</form>
			</div>

			<div>
				{formData.map((data) => {
					return (
						<div key={data.id} className="cart-container">
							<h5
								style={{
									textDecoration: data.isCompleted ? "line-through" : "none",
								}}>
								{data.text}
							</h5>
							<input
								type="checkbox"
								onClick={() => handleCompleted(data.id)}></input>
							<span>
								<button onClick={() => handleRemove(data.id)}>remove</button>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default ToDo;
