import { useState, useEffect } from "react";
const url = "https://api.github.com/users";
const FetchUsersWithEffects = () => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const FetchUser = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					setError(true);
					setLoading(false);
					return;
				}
				const data = await response.json();
				console.log(data);
				setUsers(data);
			} catch (error) {
				//   if error,put this condition to true
				setError(true);
			}
			// once fetching done,set the loading to false
			setLoading(false);
		};
		// It is crucial to call the fetchUser function after try-catch block.
		FetchUser();
	}, []);

	if (error) {
		return <h1>Error....</h1>;
	}
	if (loading) {
		return <h1>Loading....</h1>;
	}
	return (
		<>
			<h1>Data Fetched</h1>
			{users.map((user) => (
				<article key={user.id}>
					<img src={user.avatar_url}></img>
					<h5>{user.login}</h5>
					<a href={user.html_url}>Profile</a>
				</article>
			))}
		</>
	);
};

export default FetchUsersWithEffects;
