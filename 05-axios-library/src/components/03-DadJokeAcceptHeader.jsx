import axios from "axios";
import { useEffect, useState } from "react";

const DadJokeAcceptHeader = () => {
	const [joke, setJoke] = useState(null);

	const url = "https://icanhazdadjoke.com/";

	const fetchUrl = async () => {
		try {
			const response = await axios.get(url, {
				headers: {
					Accept: "application/json",
				},
			});
			const data = response.data;
			console.log(response);
			console.log(data);
			setJoke(data.joke);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchUrl();
	}, []);

	return (
		<article>
			<button onClick={fetchUrl}>Random Joke</button>
			<p>{joke}</p>
		</article>
	);
};
export default DadJokeAcceptHeader;
