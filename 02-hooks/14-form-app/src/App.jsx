import { useState } from "react";
import GoalsList from "./components/GoalsList";
import AddGoals from "./components/AddGoal";
function App() {
	const [allGoals, setAllGoals] = useState([]);

	const addGoal = (goal) => {
		setAllGoals([...allGoals, goal]);
	};
	console.log(allGoals);
	return (
		<div className="container">
			<AddGoals onAddGoal={addGoal}></AddGoals>
			<GoalsList allGoals={allGoals}></GoalsList>
		</div>
	);
}

export default App;
