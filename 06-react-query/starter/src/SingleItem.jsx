import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDeleteTask, useEditTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
	const queryClient = useQueryClient();
	const { editTask } = useEditTask();
	const { deleteTask, isLoading } = useDeleteTask();

	return (
		<div className="single-item">
			<input
				type="checkbox"
				checked={item.isDone}
				onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
			/>
			<p
				style={{
					textTransform: "capitalize",
					textDecoration: item.isDone && "line-through",
				}}>
				{item.title}
			</p>
			<button
				className="btn remove-btn"
				type="button"
				onClick={() => deleteTask({ taskId: item.id })}
				disabled={isLoading}>
				delete
			</button>
		</div>
	);
};
export default SingleItem;
