import { useState } from "react";

const Button = () => {
  const [labName, setLabName] = useState("Hoshmand");
  const handleClick = () => {
    console.log("HELLO");
    setLabName("Dhi");
  };
  return (
    <>
      <h3>{labName}</h3>
      <button onClick={handleClick}>change the name</button>
    </>
  );
};
export default Button;
