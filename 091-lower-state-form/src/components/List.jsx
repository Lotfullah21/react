import { useState } from "react";

const List = ({ colleges }) => {
  return (
    <div>
      {colleges.map((college) => {
        const { name, course, id } = college;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <h5>{course}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default List;
