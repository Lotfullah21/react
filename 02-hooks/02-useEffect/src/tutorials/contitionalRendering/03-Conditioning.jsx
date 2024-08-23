import { useState, useEffect } from "react";

const Evaluate = () => {
  const [name, setName] = useState("MIT");
  const [noName, setNoName] = useState(" ");

  if (name || noName) {
    console.log("Name", name);
    console.log("NoName", noName);
    return <h1>Truthy</h1>;
  }
  if (name && noName) {
    console.log(name);
    return <h1>falsy</h1>;
  }
};

export default Evaluate;
