import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyContextProvider from "./components/Contexts";
import UseContext from "./components/MessageContext";
function App() {
  return (
    <>
      <MyContextProvider>
        <UseContext></UseContext>
        <Navbar></Navbar>
      </MyContextProvider>
    </>
  );
}

export default App;
