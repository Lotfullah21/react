import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InitialScript from "./useEffectCodes/Initial";
import MultipleState from "./useEffectCodes/MultipleState";
import MultipleReturns from "./contitionalRendering/MultipleReturns";
import FetchUsers from "./useEffectCodes/FetchUsers";
import FetchData from "./contitionalRendering/FetchData";
import Evaluate from "./contitionalRendering/Conditioning";
import EvaluateTo from "./contitionalRendering/Truthy";
import MultipleReturnsTime from "./contitionalRendering/MultipleReturnsTime";
import Ternary from "./contitionalRendering/Ternary";
import Toggle from "./contitionalRendering/Toggle";
import LogingLogOut from "./contitionalRendering/Login";
import ToggleState from "./useEffectCodes/CleanUp";
function App() {
  return (
    <>
      <ToggleState></ToggleState>
    </>
  );
}

export default App;
