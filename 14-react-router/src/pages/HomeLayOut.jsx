import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayOut = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="page">
        <Outlet></Outlet>
        <footer>footer</footer>
      </section>
    </>
  );
};
export default HomeLayOut;
