import styled from "styled-components";

const Wrapper = styled.article`
	background: var(--clr-white);
	box-shadow: var(--shadow-md);
	transition: var(--transition);
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: 8px;
	cursor: pointer;

	.img {
		width: 100%;
		height: 16rem;
		object-fit: cover;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
	}

	.footer {
		padding: 1.5rem;
	}

	.footer h4 {
		font-weight: 600;
	}
	.footer h4,
	h5 {
		margin-bottom: 0.5rem;
	}
`;

export default Wrapper;
