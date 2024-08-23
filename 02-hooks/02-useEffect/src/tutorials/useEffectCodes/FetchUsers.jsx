import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    console.log("useEffect runs");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <section>
      {users.map((person) => (
        <article key={person.id}>
          <h2>{person.login}</h2>
          <img src={person.avatar_url}></img>
        </article>
      ))}
    </section>
  );
};
export default FetchUsers;
