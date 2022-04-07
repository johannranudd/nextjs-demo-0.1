import styled from 'styled-components';

export const StyledDiv = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 350px;
    margin: auto;
    padding: 2rem 0;
    div {
      label {
        margin-right: 0.3rem;
      }
      select {
        padding: 0.2rem;
        text-transform: capitalize;
        option {
        }
      }
    }
  }
`;
