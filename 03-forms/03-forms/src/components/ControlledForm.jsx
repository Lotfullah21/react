import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    console.log("Form Submitted.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="testing">Name: </label>
          <input
            id="testing"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Name"
            name="name"
          ></input>
        </div>
        <button disabled={!text} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
