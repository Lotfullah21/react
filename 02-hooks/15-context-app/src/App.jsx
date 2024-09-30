import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";
function App() {
	return (
		<>
			<Navbar></Navbar>
			<ProductsContainer></ProductsContainer>
		</>
	);
}

export default App;
