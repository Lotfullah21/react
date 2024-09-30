import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextApp from "./context/context";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ContextApp>
			<App />
		</ContextApp>
	</StrictMode>
);
