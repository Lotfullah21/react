import useToggle from "./useToggle";

const SImpleCustomHook = () => {
  const { value, toggle } = useToggle(true);
  console.log(value);
  return (
    <>
      {value}
      <button onClick={toggle}>Click here</button>
      {value ? <h4>Toggle to False</h4> : <h5>Toggle to True</h5>}
    </>
  );
};
export default SImpleCustomHook;
