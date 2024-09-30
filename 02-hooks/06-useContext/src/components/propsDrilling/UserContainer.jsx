const UserContainer = (props) => {
	return (
		<div className="user-container">
			{props.user ? (
				<>
					<p>
						hello there, {props.user && props.user && props.user.toUpperCase()}
					</p>
					<button onClick={props.logout}>logout</button>
				</>
			) : (
				<p>please login</p>
			)}
		</div>
	);
};
export default UserContainer;
