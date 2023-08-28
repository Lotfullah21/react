import { useState } from "react";
import Universities from "../data/data";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(Universities);
  const handleName = (e) => {
    setName(e.target.value);
  };

  const AddCollege = () => {
    return (
      <div>
        {data.map((college) => {
          const { name, id } = college;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button onClick={() => handleClear(college.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCollege = { id: Date.now(), name: name };
    const newData = [...data, newCollege];
    setData(newData);
    setName("");
  };

  const handleClear = (id) => {
    const newData = data.filter((college) => college.id !== id);
    setData(newData);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Submit the form</h1>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleName}
          ></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button>submit</button>
      </form>

      <div className="form-data">{AddCollege()}</div>
    </>
  );
};
export default ControlledInputs;
