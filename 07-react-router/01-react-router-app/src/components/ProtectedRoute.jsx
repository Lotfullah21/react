import { useAuthContext } from "../context/auth-context";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
	const { loggedIn } = useAuthContext();

	return loggedIn ? children : <Navigate to="/login"></Navigate>;
};
