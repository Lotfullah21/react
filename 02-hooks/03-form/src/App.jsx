import { useState } from "react";
import UncForm from "./components/Uncontrolled";
import ControlledForm from "./components/Controlled";
import Form from "./components/ControlledForm";
import ReviewForm from "./components/ReviewForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReviewForm></ReviewForm>
    </>
  );
}

export default App;
