import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CustomFetch from "./utils/Auth";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["task"],
		queryFn: () => CustomFetch.get("/"),
	});

	return { data, isLoading, isError };
};

export const useCreateTask = () => {
	const queryClient = useQueryClient();
	const { mutate: createTask, isLoading } = useMutation({
		mutationFn: (taskTitle) => CustomFetch.post("/", { title: taskTitle }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["task"] });
			toast.success("task added");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
	return { createTask, isLoading };
};

export const useEditTask = () => {
	const queryClient = useQueryClient();
	const { mutate: editTask } = useMutation({
		mutationFn: ({ taskId, isDone }) => {
			return CustomFetch.patch(`/${taskId}`, { isDone });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["task"] });
		},
		onError: () => {},
	});
	return { editTask };
};

export const useDeleteTask = () => {
	const queryClient = useQueryClient();
	const { mutate: deleteTask, isLoading } = useMutation({
		mutationFn: ({ taskId }) => {
			return CustomFetch.delete(`/${taskId}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["task"] });
		},
		onError: () => {},
	});
	return { deleteTask, isLoading };
};
