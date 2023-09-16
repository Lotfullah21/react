import styled from "styled-components";

const CocktailSinglePage = styled.article`
  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .drink-card {
    display: grid;
    row-gap: 1rem;
  }
  .drink-card p {
    line-height: 1.1rem;
    font-weight: 500;
  }
  img {
    border-radius: 5px;
  }
  .drink-info {
    padding-top: 1rem;
    display: grid;
    row-gap: 0.6rem;
    color: black;
  }
  .comma {
    margin-left: -0.221rem;
    margin-right: 1rem;
    font-size: 1.1rem;
  }

  @media (min-width: 800px) {
    .drink-card {
      grid-template-columns: 1fr 1.5fr;
      column-gap: 3rem;
      align-content: center;
    }
    .drink-info {
      padding: 1rem;
      display: grid;
      row-gap: 0;
      color: black;
    }
  }
`;

export default CocktailSinglePage;
