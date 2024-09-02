import styled from "styled-components";

const Wrapper = styled.div`
	min-height: 100vh;
	text-align: center;
	display: grid;
	align-items: center;
	justify-items: center;

	img {
		max-width: 600px;
		display: block;
		margin-bottom: 2rem;
		margin-top: -3rem;
	}

	h3 {
		text-transform: capitalize;
		color: red;
	}
	p {
		line-height: 2;
		color: var(--clr-grey-3);
		letter-spacing: 1px;
		text-transform: capitalize;
	}

	a {
		color: var(--clr-secondary-4);
		font-weight: 600;
		text-transform: capitalize;
		font-size: 1rem;
	}
`;

export default Wrapper;
