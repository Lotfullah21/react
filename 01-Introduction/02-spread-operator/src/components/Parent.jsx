import React from "react";

const Child = ({ name, subjects }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{subjects?.ML}</p>
      <p>{subjects?.AI}</p>
    </div>
  );
};

const Parent = () => {
  const info = {
    name: "HoshmandLab",
    subjects: {
      AI: "Artificial Intelligence",
      ML: "Machine Learning",
    },
  };

  return <Child {...info}></Child>;
};

export default Parent;
export { Child };
