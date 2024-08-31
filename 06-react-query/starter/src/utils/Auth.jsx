import axios from "axios";

const CustomFetch = axios.create({
	baseURL: "http://localhost:9000/api/tasks",
	headers: {
		Accept: "application/json",
	},
});

export default CustomFetch;
