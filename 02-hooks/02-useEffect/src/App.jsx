import { useState } from "react";
import HelloUseEffect from "./tutorials/useEffect/01-whyUsefEffect";
import HelloFromUseEffect from "./tutorials/useEffect/02-Initial";
import MultipleEffect from "./tutorials/useEffect/03-MultipleEffects";
import FetchUsers from "./tutorials/useEffect/04-fetchUsersError";
import CorrectedFetchUsers from "./tutorials/useEffect/04-fetchUsersError";
import FetchUsersWithEffects from "./tutorials/useEffect/05-fetchUsersWithEffect";
import Ternary from "./tutorials/contitionalRendering/04-Ternary";
import CleanUp from "./tutorials/useEffect/CleanUp";
import Practice from "./tutorials/Practice";

function App() {
	return (
		<div className="container">
			<CorrectedFetchUsers></CorrectedFetchUsers>
		</div>
	);
}

export default App;
