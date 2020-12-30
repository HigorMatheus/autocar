import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 5rem;
  align-items: center;
  div {
    display: flex;
    margin: 0 auto;
    max-width: 90rem;
    align-items: center;
    justify-content: space-between;
    img {
      width: 12.5rem;
    }
  }
`;
