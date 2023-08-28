import { useState } from "react";
import Universities from "../data/data";

const courses = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Python",
];

const CheckBox = () => {
  const [cost, setCost] = useState(false);
  const [course, setCourse] = useState("Machine Learning");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
  };

  const handleCourseFee = (e) => {
    console.log(e.target.checked);
    setCost(e.target.checked);
  };

  const handleCourses = (e) => {
    setCourse(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Submit the form</h1>
        <div style={{ textAlign: "left" }}>
          <label htmlFor="course">Free</label>
          <input
            type="checkbox"
            name="course"
            id="course"
            checked={cost}
            onChange={handleCourseFee}
          ></input>
        </div>
        <div>
          <label htmlFor="courses">Courses</label>
          <select
            name="course"
            id="course"
            value={course}
            onChange={handleCourses}
          >
            {courses.map((course) => {
              return <option key={course}>{course}</option>;
            })}
          </select>
        </div>

        <button>submit</button>
      </form>
    </>
  );
};
export default CheckBox;
