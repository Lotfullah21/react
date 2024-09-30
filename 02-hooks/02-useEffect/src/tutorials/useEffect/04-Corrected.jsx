import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const CorrectedFetchUsers = () => {
	const [users, setUsers] = useState([]);

	// Fetch data only once on component mount
	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	// useEffect ensures fetchData runs only once after the initial render
	useEffect(() => {
		fetchData();
	}, []); // Empty dependency array makes this run only once on mount

	return (
		<div>
			{users.map((person) => {
				const { avatar_url, login, id, node_id } = person;
				return (
					<div key={id}>
						<h3>{login}</h3>
						<img src={avatar_url} alt={node_id} />
					</div>
				);
			})}
			<button className="btn" onClick={fetchData}>
				Fetch users
			</button>
		</div>
	);
};

export default CorrectedFetchUsers;
