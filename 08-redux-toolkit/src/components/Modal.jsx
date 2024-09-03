import { closeModal, openModal } from "../features/modal /modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.modal);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
		return () => document.body.classList.remove("no-scroll"); // Clean up when component unmounts
	}, [isOpen]);

	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>remove all items from shopping cart?</h4>
				<div className="btn-container">
					<button
						type="button"
						className="btn btn-confirm"
						onClick={() => {
							dispatch(clearCart());
							dispatch(closeModal());
						}}>
						confirm
					</button>
					<button
						type="button"
						className="btn btn-cancel"
						onClick={() => dispatch(closeModal())}>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
};
export default Modal;
