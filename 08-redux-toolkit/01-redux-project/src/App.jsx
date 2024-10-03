import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	const { isOpen } = useSelector((state) => state.modal);
	console.log(isOpen);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotal());
	}, [cartItems]);

	return (
		<main>
			{isOpen && <Modal></Modal>}
			<Navbar></Navbar>
			<CartContainer></CartContainer>
		</main>
	);
}

export default App;
