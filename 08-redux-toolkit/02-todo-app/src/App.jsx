import { useSelector, useDispatch } from "react-redux";
import {
	addToList,
	removeFromList,
	cleartodoList,
} from "./features/todoSlice/todoSlice";
import { useState } from "react";

export default function App() {
	const [textInput, setTextInput] = useState("");
	const { todo } = useSelector((state) => state.todoSlice);
	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (textInput.trim()) {
			dispatch(addToList(textInput));
			setTextInput("");
		}
	};

	const handleRemove = (id) => {
		dispatch(removeFromList(id));
	};

	const handleClear = () => {
		dispatch(cleartodoList());
	};

	return (
		<section className="w-screen h-screen p-8 bg-gray-200 flex flex-col items-center">
			<h1 className="text-center m-4 text-4xl font-bold text-gray-800">
				To Do List
			</h1>
			{/* Input */}
			<div className="mt-8 flex items-center space-x-4">
				<input
					value={textInput}
					onChange={(e) => setTextInput(e.target.value)}
					className="bg-white border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
					placeholder="Enter a task"
				/>
				<button
					onClick={handleSubmit}
					className="bg-orange-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-orange-600 transition duration-200">
					Add
				</button>
			</div>
			{/* Todo item */}
			<div className="mt-8 w-full max-w-2xl">
				{todo.length > 0 ? (
					todo.map((todoItem) => (
						<article
							key={todoItem.id}
							className="flex justify-between items-center bg-white border border-gray-300 rounded-lg p-4 mt-4 shadow-sm transition duration-200 hover:shadow-md">
							<h1 className="text-gray-800">{todoItem.task}</h1>
							<button
								onClick={() => handleRemove(todoItem.id)}
								className="bg-red-500 text-white rounded-lg px-3 py-1 shadow-md hover:bg-red-600 transition duration-200">
								Remove
							</button>
						</article>
					))
				) : (
					<p className="text-center text-gray-600">No tasks available.</p>
				)}
			</div>
			{/* CLear all button */}
			<button
				onClick={handleClear}
				className="mt-8 bg-red-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-red-600 transition duration-200">
				Clear All
			</button>
		</section>
	);
}
