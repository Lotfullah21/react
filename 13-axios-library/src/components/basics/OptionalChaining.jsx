const OptionalChaining = () => {
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

  const frontEnd = lab?.courses?.web?.front_end;
  console.log(frontEnd);
  return (
    <>
      <h3>{lab?.courses?.ml}</h3>
      <h5>Front End: {frontEnd}</h5>
    </>
  );
};

export default OptionalChaining;
