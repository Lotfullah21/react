import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";
import InputForm from "./components/InputForm";
function App() {
	const [count, setCount] = useState(0);

	return <Counter></Counter>;
}

export default App;
