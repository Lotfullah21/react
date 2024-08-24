import "./index.css";

import StandardForm from "./components/StandardForm";
import UncForm from "./components/01-Uncontrolled";
import ControlledForm from "./components/02-Controlled";
import ControlledFormChallenge from "./components/04-ControlledFormChallenge";
import MultipleInput from "./components/05-MultipleInput";
import CheckBoxForm from "./components/06-CheckBoxForm";
import FormDataAPI from "./components/07-FormDataAPI";
import Form from "./components/03-ControlledForm";
import ReviewForm from "./components/ReviewForm";

function App() {
	return (
		<div className="container">
			<FormDataAPI></FormDataAPI>
		</div>
	);
}

export default App;
