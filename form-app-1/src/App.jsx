import { useState } from "react";
import ControlledInputs from "./components/ControlledInputs";
import AddCollege from "./components/AddCollege";
import "./App.css";
import MultipleInput from "./components/MultipleInputs";
import CheckBox from "./components/CheckBox";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CheckBox></CheckBox>
      {/* <MultipleInput></MultipleInput> */}
      {/* <AddCollege></AddCollege> */}
      {/* <ControlledInputs></ControlledInputs> */}
    </>
  );
}

export default App;
