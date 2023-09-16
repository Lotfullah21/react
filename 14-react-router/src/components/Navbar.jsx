import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavarWrapper from "../wrappers/Navbar";

const Navbar = () => {
  return (
    <NavarWrapper>
      <div className="nav-center">
        <NavLink className="logo" to="/">
          <span className="logo">Cocktail</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </div>
    </NavarWrapper>
  );
};
export default Navbar;
