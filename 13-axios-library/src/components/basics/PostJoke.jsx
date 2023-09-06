import axios from "axios";
import { useState } from "react";

const PostJoke = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const url = "https://course-api.com/axios-tutorial-post";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { name, email });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
    console.log(name, email);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};
export default PostJoke;
