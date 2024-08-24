import { useState, useCallback } from "react";
import List from "./List";
import Counter from "./Counter";
import universities from "../data/Data";
const Colleges = () => {
  const [data, setData] = useState(universities);
  //

  const removeCollege = useCallback((id) => {
    console.log(data);
    const newCollege = data.filter((college) => college.id !== id);
    setData(newCollege);
  }, []);

  return (
    <div>
      <Counter></Counter>
      <List colleges={data} removeCollege={removeCollege}></List>
    </div>
  );
};
export default Colleges;
