import { useState, useEffect } from "react";

const Toggle = () => {
  const [exist, setExist] = useState(true);

  const handleClick = () => {
    return exist ? setExist(false) : setExist(true);
  };

  return (
    <>
      {exist && <New />}
      <button onClick={handleClick}>Toggle</button>
      {/* <button onClick={() => setExist(!exist)}>Toggle</button> */}
    </>
  );
};
const New = () => {
  return <h3>Hello,added from external</h3>;
};

export default Toggle;
