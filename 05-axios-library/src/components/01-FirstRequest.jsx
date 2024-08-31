import { useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";

const FirstRequest = () => {
	const fetchData = async () => {
		try {
			const response = await axios(url);
			const data = response.data;
			console.log("response", response);
			console.log("data", data);
			console.log("data using .", response.data);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <div>FirstRequest</div>;
};
export default FirstRequest;
