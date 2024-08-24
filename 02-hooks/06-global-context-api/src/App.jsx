import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Use from "./components/Use";
import { useMyGlobalContext } from "./components/context";

function App() {
  const [count, setCount] = useState(0);
  const { college: name } = useMyGlobalContext();

  return (
    <>
      <Use></Use>
    </>
  );
}

export default App;
