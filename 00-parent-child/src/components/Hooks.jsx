import { set } from "mongoose";
import { useState } from "react";

const InputText = () => {
  const [inputText, setText] = useState("Salam");

  const handleClick = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>Hello</h1>
      <input value={inputText} onChange={handleClick}></input>
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("Salam")}>Reset</button>
    </>
  );
};

export default InputText;
