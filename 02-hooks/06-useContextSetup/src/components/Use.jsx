import { useMyGlobalContext } from "../context";

const Use = () => {
	const { college } = useMyGlobalContext();
	return <div>{college}</div>;
};
export default Use;
