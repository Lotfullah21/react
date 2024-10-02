import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MyContextProvider from "./context/auth-context";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<MyContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MyContextProvider>
	</StrictMode>
);
