import styled from "styled-components";
const Error = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90vw;
    display: block;
    max-width: 500px;
    margin-bottom: 1.5rem;
    margin-top: -3rem;
  }

  h1 {
    letter-spacing: 1px;
    font-size: 2rem;
    margin-bottom: 0.9rem;
  }
  p {
    line-height: 1.2;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  a {
    text-transform: capitalize;
    color: red;
    font-size: 1.1rem;
  }
`;

export default Error;
