import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/courses" element={<Courses></Courses>}></Route>

				<Route
					path="/cart"
					element={
						<ProtectedRoute>
							<Cart></Cart>
						</ProtectedRoute>
					}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
			</Routes>
		</>
	);
}

export default App;
