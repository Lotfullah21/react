import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InitialScript from "./tutorials/useEffectCodes/Initial";
import MultipleState from "./tutorials/useEffectCodes/MultipleState";
import MultipleReturns from "./tutorials/contitionalRendering/MultipleReturns";
import FetchUsers from "./tutorials/useEffectCodes/FetchUsers";
import FetchData from "./tutorials/contitionalRendering/FetchData";
import Evaluate from "./tutorials/contitionalRendering/Conditioning";
import EvaluateTo from "./tutorials/contitionalRendering/Truthy";
import MultipleReturnsTime from "./tutorials/contitionalRendering/MultipleReturnsTime";
import Ternary from "./tutorials/contitionalRendering/Ternary";
import Toggle from "./tutorials/contitionalRendering/Toggle";
import LogingLogOut from "./tutorials/contitionalRendering/Login";
import ToggleState from "./tutorials/useEffectCodes/CleanUp";
function App() {
	return (
		<>
			<ToggleState></ToggleState>
		</>
	);
}

export default App;
