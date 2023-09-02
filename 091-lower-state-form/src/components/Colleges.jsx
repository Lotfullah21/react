import List from "./List";
import Form from "./Form";
import { useState } from "react";
import universities from "../data/Data";
const Colleges = () => {
  const [colleges, setColleges] = useState(universities);
  //
  const addCollege = (name) => {
    const ID = Date.now();
    const newCollege = { id: ID, name: name };
    setColleges([...colleges, newCollege]);
  };
  return (
    <div>
      <Form addCollege={addCollege}></Form>
      <List colleges={colleges}></List>
    </div>
  );
};
export default Colleges;
