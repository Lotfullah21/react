import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
	const error = useRouteError();
	console.log("ERROR", error);
	return <div>{error.message}</div>;
};
export default SinglePageError;
