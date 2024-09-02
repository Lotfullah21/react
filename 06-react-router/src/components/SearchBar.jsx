import SearchBarStyle from "../wrappers/SearchBar";
import { Form, useNavigation } from "react-router-dom";
const SearchBar = ({ searchTerm }) => {
  const navigation = useNavigation();
  const searching = navigation.state === "submitting";
  return (
    <SearchBarStyle>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        ></input>
        <button type="submit" className="btn">
          {searching ? "searching" : "search"}
        </button>
      </Form>
    </SearchBarStyle>
  );
};
export default SearchBar;
