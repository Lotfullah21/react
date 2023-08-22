import { useState } from "react";

const ArrayDestructuring = () => {
  const [subjects, setSubjects] = useState(["Artificial Intelligence"]);
  const handleClick = () => {
    setSubjects("Deep Learning");
  };
  return (
    <>
      <span>
        subject name:
        <h4>{subjects}</h4>
      </span>
      <button onClick={handleClick}>change subjects</button>
    </>
  );
};
export default ArrayDestructuring;
