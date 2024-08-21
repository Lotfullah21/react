import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Composed from "./components/component";
import CloneELement from "./components/CloneELement";
import ChildrenMap from "./components/ChildrenMap";
function App() {
  return (
    <>
      <CloneELement></CloneELement>
      <ChildrenMap>
        <p>Hello, I am child</p>
        <p>Hello, I am child</p>
        <p>Hello, I am child</p>
      </ChildrenMap>
    </>
  );
}

export default App;
