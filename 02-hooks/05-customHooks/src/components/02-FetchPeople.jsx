import { useState, useRef, useEffect } from "react";
import userFetchPeople from "./customHooks/useFetchPerson";

const url = "https://api.github.com/users";

const FetchPeople = () => {
	const { user, isLoading, isError } = userFetchPeople(url);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Something went wrong</h1>;
	} else {
		return (
			<div>
				{user.map((person) => {
					const { avatar_url, login, id } = person;
					return (
						<div key={id}>
							<img src={avatar_url}></img>
							<h3>{login}</h3>
						</div>
					);
				})}
			</div>
		);
	}
};
export default FetchPeople;
