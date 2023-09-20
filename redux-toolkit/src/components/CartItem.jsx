import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";

const CartItem = ({ id, image, total, amount, title, price }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image}></img>
      <div>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <VscChevronUp></VscChevronUp>
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <VscChevronDown></VscChevronDown>
        </button>
      </div>
    </article>
  );
};
export default CartItem;
