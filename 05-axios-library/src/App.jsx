import FirstRequest from "./components/01-FirstRequest";
import DadJokeAcceptHeader from "./components/03-DadJokeAcceptHeader";
import PostJoke from "./components/04-PostJoke";
import DefaultSetup from "./components/05-DefaultSetup";
import "./axios/global";
import CustomAxios from "./components/06-CustomAxios";
const App = () => {
	return (
		<main>
			<CustomAxios></CustomAxios>
		</main>
	);
};
export default App;
