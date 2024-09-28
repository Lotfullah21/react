import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./components/HomeLayout";
import Courses from "./components/Courses";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HomeLayout></HomeLayout>}></Route>
				<Route path="/courses" element={<Courses></Courses>}></Route>
			</Routes>
		</>
	);
}

export default App;
