import { useState } from "react";

const ControlledForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    //   Every time you type a new character, the handleChange function is executed. It receives the new value of the input,
    const newVal = e.target.value;
    setValue(newVal);
    console.log(newVal);
  };

  return (
    <form>
      <label>Click</label>
      <input value={value} onChange={handleChange} type="text" />
      <h3>{value}</h3>
    </form>
  );
};

export default ControlledForm;
