import axios from "axios";

const AuthFetch = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/json",
	},
});
export default AuthFetch;
