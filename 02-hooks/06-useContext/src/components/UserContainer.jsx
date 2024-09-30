import { useAppContext } from "./Navbar";

const UserContainer = () => {
	const data = useAppContext();
	console.log(data);
	return (
		<div className="user-container">
			<p>hello there,{data.user}</p>
			<button onClick={data.logout}>logout</button>
		</div>
	);
};
export default UserContainer;
