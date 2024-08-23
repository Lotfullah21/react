import { useState, useEffect } from "react";

const EvaluateTo = () => {
  const [name, setName] = useState("MIT");
  const [noName, setNoName] = useState("");

  // using && if both are truthy,the output would be the latter one, we can use this to print something, if first one is true, do something to the other side of &&
  return (
    <>
      <h3>Falsy:{name || noName}</h3>
      <h3>Falsy:{noName || name}</h3>
      <h3>Truthy:{name && "Stanford"}</h3>
      <h3>Falsy:{noName && name}</h3>
    </>
  );
};

export default EvaluateTo;
