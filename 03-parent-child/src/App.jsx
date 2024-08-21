import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputText from "./components/Hooks";
import "./App.css";
import Home from "./components/Home";
import RegisterForm from "./components/Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegisterForm></RegisterForm>
    </>
  );
}

export default App;
