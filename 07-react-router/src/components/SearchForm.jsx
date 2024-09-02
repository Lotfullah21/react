import Wrapper from "../assets/wrapper/SearchFormPage.js";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<Wrapper>
			<Form className="form">
				<input
					type="text"
					placeholder="Coffee name"
					name="search"
					className="form-input"
					defaultValue={searchTerm}></input>
				<button type="submit" disabled={isSubmitting} className="btn">
					{isSubmitting ? "searching..." : "search"}
				</button>
			</Form>
		</Wrapper>
	);
};

export default SearchForm;
