import { useState } from "react";
import universities from "../data/Data";
const Form = ({ addCollege }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please provide a name");
      return;
    }
    addCollege(name);
    setName("");
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
