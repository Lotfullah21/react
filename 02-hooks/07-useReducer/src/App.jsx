import Counter from "./components/02-Reducer";
import RemoveCollegeUseState from "./components/01-RemoveCollegeUseState";
import RemoveCollegeUseReducer from "./components/02-RemoveCollegeReducer";
import "./index.css";
function App() {
	return (
		<div className="container">
			{/* <Counter></Counter> */}
			{/* <RemoveCollegeUseState></RemoveCollegeUseState> */}
			<RemoveCollegeUseReducer></RemoveCollegeUseReducer>
			{/* <RemoveCollege></RemoveCollege> */}
		</div>
	);
}

export default App;
