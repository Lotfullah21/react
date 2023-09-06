const AndOperator = () => {
  const lab = {
    labName: "Hoshmand",
    courses: {
      ml: "machine learning",
      dl: "deep learning",
      web: {
        front_end: "React",
        back_end: "Django",
      },
    },
  };

  const frontEnd =
    lab.w && lab.courses && lab.courses.web && lab.courses.web.front_end;
  const dl =
    (lab.w && lab.courses && lab.courses.web && lab.courses.dl) ||
    "course does not exist";
  console.log(frontEnd);
  return (
    <>
      <h3>{lab && lab.courses && lab.courses.ml}</h3>
      <h5>Front End: {frontEnd}</h5>
      <h3>Error: {dl}</h3>
    </>
  );
};

export default AndOperator;
