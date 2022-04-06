import styled from 'styled-components';

export const StyledDiv = styled.div`
  .section-center {
    max-width: 500px;
    .header-container {
      display: grid;
      place-items: center;
      padding: 4rem;
    }
    .single-event-container {
      display: grid;
      place-content: center;
      img {
        max-width: 500px;
      }
    }
  }
`;
