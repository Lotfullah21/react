import styled from "styled-components";

const SearchBarStyle = styled.div`
  margin-bottom: 1.7rem;

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export default SearchBarStyle;
