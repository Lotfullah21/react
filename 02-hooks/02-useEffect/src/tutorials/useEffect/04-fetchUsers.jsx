import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchUsers = () => {
	const [user, setUser] = useState([]);

	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setUser(data);
	};

	fetchData();
	const fetchUsers = async () => {
		const data = await fetchData();
	};

	return (
		<div>
			{user.map((person) => {
				const { avatar_url, login, id, node_id } = person;
				return (
					<div key={id}>
						<h3>{login}</h3>
						<img src={avatar_url} key={id} alt={node_id}></img>
					</div>
				);
			})}
			<button className="btn" onClick={() => fetchUsers()}>
				fetch users
			</button>
		</div>
	);
};
export default FetchUsers;
