const GoalsList = ({ allGoals }) => {
	return (
		<div>
			{allGoals.map((task) => {
				return (
					<article key={task.goal}>
						<span>{task.goal}</span>
						<span>by {task.due}</span>
					</article>
				);
			})}
		</div>
	);
};
export default GoalsList;
