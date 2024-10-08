import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === "loading";

	return (
		<>
			<Navbar></Navbar>
			<section className="page">
				{isPageLoading ? (
					<div className="loading">Loading...</div>
				) : (
					<Outlet></Outlet>
				)}
			</section>
		</>
	);
};

export default HomeLayout;
