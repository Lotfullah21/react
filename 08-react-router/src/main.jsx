import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ToastContainer position="top-center" autoClose={2000}></ToastContainer>
		<App />
	</StrictMode>
);
