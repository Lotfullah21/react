const Button = ({ backgroundColor, children }) => {
  console.log(backgroundColor);
  console.log(children);
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

const Composed = () => {
  return (
    <div>
      <header>Hoshmand Lab</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to delete your account</p>
      </Alert>
      <DeleteButton></DeleteButton>
    </div>
  );
};

export default Composed;
