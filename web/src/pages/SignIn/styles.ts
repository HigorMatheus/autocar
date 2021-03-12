import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  flex: 1; */
  /* align-items: center; */
  justify-content: center;

  height: 92vh;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  margin: 2rem auto;
  /* height: auto; */

  text-align: center;

  h1 {
    margin: 0 auto;
    padding: 1rem 0;
  }

  form {
    text-align: center;
    width: 35rem;
  }
`;
