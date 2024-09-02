import styled from "styled-components";

const Wrapper = styled.nav`
	background: var(--clr-white);

	.nav-center {
		width: var(--view-width);
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 1.5rem 2rem;
	}
	.logo {
		font-size: clamp(2rem, 3vw, 3rem);
		color: var(--clr-primary-5);
		font-weight: 900;
		letter-spacing: 2px;
	}

	.nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.nav-link {
		font-size: 1rem;
		text-transform: capitalize;
		color: var(--clr-grey-3);
		transform: var(--transition);
		letter-spacing: 2px;
		cursor: pointer;
	}

	.active {
		color: var(--clr-primary-4);
	}
	.nav-link:hover {
		color: var(--clr-grey-1);
	}

	@media screen and (min-width: 768px) {
		.nav-center {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		.nav-links {
			flex-direction: row;
			margin-top: 0;
		}
	}
`;

export default Wrapper;
