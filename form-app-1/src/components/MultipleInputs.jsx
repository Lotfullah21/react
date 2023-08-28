import { useState } from "react";
import Universities from "../data/data";
const MultipleInput = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Submit the form</h1>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={user.name}
            name="name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="email"
            value={user.password}
            name="password"
            onChange={handleChange}
          ></input>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};
export default MultipleInput;
