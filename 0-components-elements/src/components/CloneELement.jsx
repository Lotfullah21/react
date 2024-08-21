import React from "react";

const CloneELement = () => {
  const helloText = <h1>Hello world</h1>;
  const cloneHello = React.cloneElement(helloText, {
    style: { backgroundColor: "red" },
  });
  console.log(helloText);
  console.log(cloneHello);

  return <div>{cloneHello}</div>;
};
export default CloneELement;
