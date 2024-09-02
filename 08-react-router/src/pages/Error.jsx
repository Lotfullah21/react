import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not_found.svg";
import Wrapper from "../assets/wrapper/ErrorPage";

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt="not found"></img>
					<h3>ohh no</h3>
					<p>cannot find the page you are looking for</p>
					<Link to="/">home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h3>OOPs</h3>
		</Wrapper>
	);
};
export default Error;
