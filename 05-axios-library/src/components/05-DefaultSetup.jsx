import { useEffect } from "react";
import axios from "axios";
const url = "https://randomuser.me/api";
const DefaultSetup = () => {
	const fetchData = async () => {
		try {
			const response = await axios.get(url);
			console.log(response);
		} catch (error) {
			console.log(error.response);
		}

		console.log("Data is fetched");
	};
	useEffect(() => {
		fetchData();
	}, []);
	return <div>DefaultSetup</div>;
};
export default DefaultSetup;
