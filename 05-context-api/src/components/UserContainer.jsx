import { NavbarContext } from "./Navbar";
import { useHookContext } from "./Navbar";
import { useContext } from "react";
const UserContainer = () => {
  const { user, logout } = useHookContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          {" "}
          <h4>Hello {user?.name}</h4>
          <button onClick={logout} className="btn">
            logout
          </button>
        </>
      ) : (
        <h5>please login</h5>
      )}
    </div>
  );
};
export default UserContainer;
