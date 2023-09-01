import { useContext } from "react";
import { MyContext } from "./Contexts";
const UseContext = () => {
  const { Info } = useContext(MyContext);
  console.log(Info.message);
  return <h1>{Info.message}</h1>;
};
export default UseContext;
