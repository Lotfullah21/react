import { useState, useEffect } from "react";

const MultipleReturns = () => {
  const [isTrue, setTrue] = useState(true);
  const ChangeToFalse = () => {
    setTrue(false);
  };

  if (isTrue) {
    return (
      <>
        <h1>It is True</h1>
        <button onClick={ChangeToFalse}>change</button>
      </>
    );
  }
  const ChangeToTrue = () => {
    setTrue(true);
  };
  return (
    <>
      <h1>It is False</h1>
      <button onClick={ChangeToTrue}>SET</button>
    </>
  );
};

export default MultipleReturns;
