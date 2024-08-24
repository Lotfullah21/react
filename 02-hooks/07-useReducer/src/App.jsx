import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Reducer";
import RemoveCollegeUseState from "./components/RemoveCollegeUseState";
import RemoveCollege from "./components/RemoveCollege";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter></Counter> */}
      {/* <RemoveCollegeUseState></RemoveCollegeUseState> */}
      <RemoveCollege></RemoveCollege>
    </>
  );
}

export default App;
