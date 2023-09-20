import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <>
      {isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </>
  );
}

export default App;
