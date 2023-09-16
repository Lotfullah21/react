import styled from "styled-components";

const NavarWrapper = styled.nav`
  background: white;
  .nav-center {
    width: 90vw;
    max-width: 1192px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1.2rem 1rem;
  }
  .logo {
    font-size: clamp(2rem, 2.5vw, 3rem);
    color: rgb(231, 3, 3);
    font-weight: 600;
    letter-spacing: 1.1px;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    text-transform: capitalize;
    margin-top: 1.1rem;
  }

  .nav-link {
    text-decoration: none;
    padding: 0.475rem 0.5rem 0.475rem 0;
    color: black;
    transition: all linear 0.3s;
    letter-spacing: 1.2px;
  }
  .nav-link:hover {
    padding-left: 0.5rem;
    color: rgb(55, 52, 255);
  }

  .active {
    color: red;
    color: rgb(5, 2, 255);
  }
  @media screen and (min-width: 768px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    .nav-links {
      /* important to add the links in the center */
      place-items: center;
    }

    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-self: flex-end;
      column-gap: 2rem;
      margin-top: 0;
    }

    .nav-link:hover {
      padding-left: 0;
    }
  }
`;

export default NavarWrapper;
