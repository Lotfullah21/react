import { useRef } from "react";

const UncForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log("Input Ref", inputRef);
    console.log("Input value", inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
    </form>
  );
};

export default UncForm;
