import universities from "../data/Data";

const List = () => {
  return (
    <div>
      {universities.map((item) => {
        const { name, course, id } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <h4>{course}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default List;
