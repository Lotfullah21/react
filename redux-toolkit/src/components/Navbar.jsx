// import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { amount } = useSelector((store) => {
    console.log(store.cart);
    return store.cart;
  });
  // store is the entire state of our application, we can have access to them
  console.log(amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div>
          <FaCartPlus></FaCartPlus>
          <div className="cart-container">
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
