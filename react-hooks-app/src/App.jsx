import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ArrayDestructuring from "./components/ArrayDestructuring";
import ObjectDestructuring from "./components/ObjectDestructuring";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ObjectDestructuring></ObjectDestructuring>
    </>
  );
}

export default App;
