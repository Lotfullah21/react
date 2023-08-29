import { useState, useContext, createContext } from "react";
import NavLinks from "./NavLinks";
const NavbarContext = createContext();
const useHookContext = () => useContext(NavbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: "Ahmad" });
  console.log(NavbarContext);
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider
      value={{
        user,
        logout,
      }}
    >
      <nav className="navbar">
        <h4>HoshmandLab</h4>
        <NavLinks user={user} logout={logout}></NavLinks>
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
export { NavbarContext, useHookContext };
