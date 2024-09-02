import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayOut = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Navbar></Navbar>
      <section className="page">
        {isLoading ? <div className="loading"></div> : <Outlet></Outlet>}
      </section>
    </>
  );
};
export default HomeLayOut;
