import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyGlobalContextProvider from "./context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MyGlobalContextProvider>
			<App />
		</MyGlobalContextProvider>
	</React.StrictMode>
);
