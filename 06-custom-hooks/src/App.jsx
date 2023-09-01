import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SImpleCustomHook from "./components/SImpleCustomHook";
import ShowUsers from "./components/ShowUsers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShowUsers></ShowUsers>
      {/* <SImpleCustomHook></SImpleCustomHook> */}
    </>
  );
}

export default App;
