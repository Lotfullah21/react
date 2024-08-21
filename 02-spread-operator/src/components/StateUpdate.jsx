import { useState } from "react";
const StateUpdate = () => {
  const data = {
    name: "HoshmandLab",
    subjects: {
      AI: "Artificial Intelligence",
      ML: "Machine Learning",
    },
  };
  const [info, setInfo] = useState(data);
  const handleChange = () => {
    setInfo({
      ...info,
      AGE: 23,
      subjects: { ...info.subjects, DL: "Deep learning" },
    });
  };
  return (
    <div>
      <h1>{info.name}</h1>
      <p>{info.AGE}</p>
      {Object.entries(info.subjects).map(([index, value]) => {
        return (
          <div key={index}>
            <h3>
              {index}:{value}
            </h3>
          </div>
        );
      })}
      <button onClick={handleChange}>MORE</button>
    </div>
  );
};
export default StateUpdate;
