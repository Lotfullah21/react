import Universities from "../data/data";

const AddCollege = () => {
  return (
    <div>
      {Universities.map((college) => {
        const { name, id } = college;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default AddCollege;
