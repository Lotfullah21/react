import { useMyGlobalContext } from "./context";

const Use = () => {
  const { college: name } = useMyGlobalContext();
  return <div>{name}</div>;
};
export default Use;
