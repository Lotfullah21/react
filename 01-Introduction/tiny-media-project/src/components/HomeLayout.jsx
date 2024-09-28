import { useUser } from "./Provider";

const HomeLayout = () => {
	const { user } = useUser();
	console.log(user);
	return (
		<div>
			<h1>{user.name}</h1>
		</div>
	);
};
export default HomeLayout;
