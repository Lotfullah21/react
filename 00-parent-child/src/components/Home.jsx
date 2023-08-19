import Footer from "./Footer";
import Pages from "./pages";
const Home = () => {
  let date = new Date();
  return (
    <>
      <Pages links="home,courses"></Pages>
      <Footer
        time={date.toTimeString()}
        year={date.getFullYear()}
        app="facebook,youtube"
      ></Footer>
    </>
  );
};
export default Home;
