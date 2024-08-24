const College = ({ name, course, id, removeCollege }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{course}</h4>
      <button onClick={() => removeCollege(id)}>remove</button>
    </div>
  );
};
export default College;
