import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal">
      <div>
        <h4>remove all items?</h4>
      </div>
      <div className="btn-container">
        <button
          className="btn confirm-btn"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          confirm
        </button>
        <button
          className="btn cancel-btn"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          cancel
        </button>
      </div>
    </aside>
  );
};
export default Modal;
