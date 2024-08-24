import UserContainer from "./UserContainer";

const NavLinks = () => {
	const data = [
		{
			id: 1,
			text: "home",
			href: "#home",
		},
		{
			id: 2,
			text: "courses",
			href: "#courses",
		},
		{
			id: 3,
			text: "python",
			href: "#python ",
		},
	];

	return (
		<>
			<ul className="nav-links">
				{data.map((link) => {
					const { id, text, href } = link;
					return (
						<li key={id}>
							<a href={href}>{text}</a>
						</li>
					);
				})}
			</ul>
			<UserContainer></UserContainer>
		</>
	);
};
export default NavLinks;
