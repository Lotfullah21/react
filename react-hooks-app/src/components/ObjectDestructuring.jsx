import { useState } from "react";

const ObjectDestructuring = () => {
  const [subjects, setSubjects] = useState({
    name: "Web Development",
    courses: 4,
  });
  console.log(subjects);
  const handleClick = () => {
    const newSubjects = { ...subjects };
    newSubjects.courses = 10;
    newSubjects.name = "Artificial Intelligence";
    setSubjects(newSubjects);
  };
  return (
    <>
      <h3>Subject Name: {subjects.name}</h3>
      <h3>Number of courses: {subjects.courses}</h3>
      <button onClick={handleClick}>Change Subject</button>
    </>
  );
};
export default ObjectDestructuring;
