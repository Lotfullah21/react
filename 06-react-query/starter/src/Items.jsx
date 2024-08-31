import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";
const Items = () => {
	const { data, isLoading, isError } = useFetchTasks();

	if (isLoading) {
		return <h4 style={{ marginTop: "4rem" }}>Loading..</h4>;
	}

	if (isError) {
		return <h4 style={{ marginTop: "4rem" }}>{error.message}</h4>;
	}

	return (
		<div className="items">
			{data.data.taskList.map((item) => {
				return <SingleItem key={item.id} item={item} />;
			})}
		</div>
	);
};
export default Items;
