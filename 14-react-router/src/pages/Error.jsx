import { useRouteError, Link } from "react-router-dom";
import img from "../assets/error.svg";
import ErrorWrapper from "../wrappers/Error";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <ErrorWrapper>
        <div>
          <img src={img}></img>
          <h1>Error status: 404</h1>
          <p>the page you are looking for cannot be found</p>
          <Link to="/">back to home</Link>{" "}
        </div>
      </ErrorWrapper>
    );
  }
  return (
    <ErrorWrapper>
      <h1>Error</h1>
    </ErrorWrapper>
  );
};
export default Error;
