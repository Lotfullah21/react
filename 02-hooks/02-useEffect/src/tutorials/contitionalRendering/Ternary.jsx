import { useState, useEffect } from "react";

const Ternary = () => {
  const [name, setName] = useState("MIT");
  const [noName, setNoName] = useState("");
  const [course, setCourse] = useState("CSE");
  const [toefl, isToefl] = useState(120);
  // if name exist and truthy, return this component
  return (
    <>
      {name && <MIT courseName={course}></MIT>}
      <button className="btn">{toefl ? "Admitted" : "Rejected"}</button>
    </>
  );
};
const MIT = ({ courseName }) => {
  return (
    <>
      <h3>MIT is the best in {courseName}</h3>
      <h4>You can go and learn from there</h4>
    </>
  );
};

export default Ternary;
