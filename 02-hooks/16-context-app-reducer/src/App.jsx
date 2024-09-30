import { useState } from "react";
import Navbar from "./components/Navbar";
// import ProductsContainer from "./components/ProductsContainer";
import ProductsContainerWithFilter from "./components/ProductsContainerWithFilter";
import NavbarFilter from "./components/FilterNavbar";
function App() {
	return (
		<>
			<NavbarFilter></NavbarFilter>
			<ProductsContainerWithFilter></ProductsContainerWithFilter>
		</>
	);
}

export default App;
