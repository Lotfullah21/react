import { useState } from "react";

const UseObjectState = () => {
  const [college, setCollege] = useState({
    name: "MIT",
    course: "Computer Science",
    location: "Boston,Masachuset",
  });
  const showCollege = () => {
    setCollege({
      name: "Stanford",
      course: "Artificial Intelligence",
      location: "San Francisco,California",
    });
  };
  return (
    <>
      <div className="container">
        <h2>{college.name}</h2>
        <h4>{college.course}</h4>
        <h5>{college.location}</h5>
      </div>
      <button onClick={showCollege} className="btn">
        Stanford
      </button>
    </>
  );
};

export default UseObjectState;
