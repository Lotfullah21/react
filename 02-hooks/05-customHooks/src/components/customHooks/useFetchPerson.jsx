import { useState, useRef, useEffect } from "react";

const userFetchPeople = (url) => {
	const [user, setUsers] = useState("");
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					setLoading(false);
					setError(true);
					return;
				}
				const data = await response.json();
				setLoading(false);
				setError(false);
				setUsers(data);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		};
		fetchData();
	}, []);

	return { user, isError, isLoading };
};
export default userFetchPeople;
