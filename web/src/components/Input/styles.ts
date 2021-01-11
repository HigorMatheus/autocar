import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.colors.inputBackground};
  /* margin-left: auto;
  margin-right: 5rem; */
  input {
    border: 0;
    background: none;
  }
`;
