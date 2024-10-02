import { useAuthContext } from "../context/auth-context";
const Login = () => {
	const { loggedIn, setLoggedIn } = useAuthContext();

	const handleLogin = () => {
		setLoggedIn(true);
	};

	const handleLogOut = () => {
		setLoggedIn(false);
	};
	return (
		<div style={{ textAlign: "center", padding: "4rem" }}>
			<h1>Welcome to login page</h1>

			{loggedIn ? (
				<button
					style={{ padding: "0.2rem", marginTop: "2rem" }}
					onClick={handleLogOut}>
					log out
				</button>
			) : (
				<button
					style={{ padding: "0.2rem", marginTop: "2rem" }}
					onClick={handleLogin}>
					log in
				</button>
			)}
		</div>
	);
};
export default Login;
