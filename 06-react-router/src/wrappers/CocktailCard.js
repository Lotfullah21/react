import styled from "styled-components";

const CocktailCardWrapper = styled.article`
  background: white;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 0.1rem;
  border-radius: 2px;

  img {
    height: 16rem;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
  }

  .footer {
    display: grid;
    padding: 1rem;
    row-gap: 0.7rem;

    h2 {
      text-transform: capitalize;
      letter-spacing: 1.3px;
      color: black;
    }
    p {
      color: gray;
    }

    .btn-detail {
      display: block;
      width: 5rem;
      text-align: center;
      text-transform: capitalize;
      letter-spacing: 1px;
      text-decoration: none;
      background: rgb(209, 1, 1);
      color: rgb(255, 255, 255);
      padding: 0.2rem 0.4rem;
      border-radius: 2px;
    }

    .btn-detail:hover {
      background: rgb(164, 1, 1);
    }
  }
`;

export default CocktailCardWrapper;
