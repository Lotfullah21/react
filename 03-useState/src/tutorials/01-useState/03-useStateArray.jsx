import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [colleges, setPeople] = useState(data);

  const removeCollege = (rank) => {
    let newCollege = colleges.filter((college) => college.rank !== rank);
    setPeople(newCollege);
  };

  return (
    <div>
      {colleges.map((eachItem) => {
        const { rank, name } = eachItem;
        return (
          <div key={rank}>
            <h3>{name}</h3>
            <h4 style={{ color: "red", fontSize: "1.5rem" }}>#{rank}</h4>
            <button onClick={() => removeCollege(rank)}>Remove</button>
          </div>
        );
      })}
      <div>
        <button
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={() => setPeople([])}
        >
          Clear Items
        </button>
      </div>
    </div>
  );
};

export default UseStateArray;
