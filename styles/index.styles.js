import styled from 'styled-components';

export const StyledDiv = styled.div`
  .section-center {
    .header-container {
      display: grid;
      place-items: center;
      padding: 4rem;
      h1 {
      }
    }
    ul {
      display: grid;
      grid-gap: 2rem;
      li {
        img {
          max-width: 350px;
        }
        p {
        }
        h3 {
        }
      }
    }
  }

  @media (min-width: 800px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;
