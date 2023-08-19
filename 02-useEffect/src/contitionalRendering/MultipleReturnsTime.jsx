import { useState, useEffect } from "react";

const MultipleReturns = () => {
  const [isTrue, setTrue] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTrue(false);
    }, 5000);
  }, []);

  if (isTrue) {
    return <h1>It is True</h1>;
  }

  return (
    <>
      <h1>It is False</h1>
    </>
  );
};

export default MultipleReturns;
