import { memo } from "react";
import College from "./College";
const List = ({ colleges, removeCollege }) => {
  return (
    <div>
      {colleges.map((item) => {
        const { name, course, id } = item;
        return (
          <College key={id} {...item} removeCollege={removeCollege}></College>
        );
      })}
    </div>
  );
};
// it will only be re-rendered if there is any change in props like {name, course,id},even if the parent state in Colleges component changes.
export default memo(List);
