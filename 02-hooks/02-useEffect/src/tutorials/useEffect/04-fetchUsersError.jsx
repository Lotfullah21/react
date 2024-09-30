import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchUsers = () => {
	const [user, setUser] = useState([]);

	const fetchData = async () => {
		const data = await axios.get(url);
		console.log(data);
		// const data = await response.json();
		setUser(data.data);
	};
	useEffect(() => {
		fetchData();
	}, []);

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
			<button className="btn" onClick={fetchData}>
				fetch users
			</button>
		</div>
	);
};
export default FetchUsers;
