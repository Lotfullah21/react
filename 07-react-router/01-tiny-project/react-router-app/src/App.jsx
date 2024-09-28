import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";

function App() {
	return (
		<>
			<Navbar></Navbar>;
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/courses" element={<Courses></Courses>}></Route>
			</Routes>
		</>
	);
}

export default App;
