const Button = ({ type, children, ...moreProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  console.log(type);
  return (
    <button className={`Button ${className}`} {...moreProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...moreProps }) => {
  return <Button {...moreProps}>{children}</Button>;
};

const ButtonContainer = () => {
  return (
    <div className="buttonContainer">
      <header>HoshmandLab</header>
      <Button
        type="primary"
        onClick={() => {
          alert("Signing up");
        }}
      >
        Sign up
      </Button>
      <LoginButton
        type="secondary"
        onClick={() => {
          alert("Login in");
        }}
      >
        Login
      </LoginButton>
    </div>
  );
};

export default ButtonContainer;
export { LoginButton };
