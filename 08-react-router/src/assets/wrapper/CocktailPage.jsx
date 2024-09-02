import styled from "styled-components";

const Wrapper = styled.div`
	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.btn {
		margin-bottom: 1rem;
	}

	img {
		border-radius: var(--border-radius);
	}

	.drink-info {
		padding: 2rem;
	}

	.drink p {
		line-height: 2;
		font-family: 700;
		text-transform: capitalize;
		margin-bottom: 1rem;
	}

	.drink-data {
		cursor: pointer;
		margin-right: 0.5rem;
		color: var(--clr-white);
		background: var(--clr-primary-5);
		border: transparent;
		border-radius: var(--border-radius);
		letter-spacing: var(--spacing-wide);
		padding: 0.175rem 0.5rem;
		box-shadow: var(--shadow-1);
		transition: var(--transition);
		text-transform: capitalize;
		display: inline;
	}

	@media screen and (min-width: 768px) {
		.drink {
			display: grid;
			grid-template-columns: 2fr 3fr;
			gap: 2rem;
			align-items: center;
		}
		.padding-info {
			padding: 0;
		}
	}
`;

export default Wrapper;
