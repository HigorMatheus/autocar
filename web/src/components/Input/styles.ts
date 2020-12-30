import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.colors.backgroundInput};
  input {
    border: 0;
    background: none;
  }
`;
