import styled from "styled-components";

const Wrapper = styled.div`
	margin-bottom: 4rem;

	.form {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.form-input {
		border-bottom-left-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
		padding: 0.2rem;
	}

	.btn {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

export default Wrapper;
