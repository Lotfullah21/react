import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h1>Your Bag</h1>
          <h3>Empty</h3>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h1>Your bag</h1>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item}></CartItem>
        ))}
      </div>
      <footer>
        <hr></hr>
        <div>
          <h2>
            total: <span>${total}</span>
          </h2>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
