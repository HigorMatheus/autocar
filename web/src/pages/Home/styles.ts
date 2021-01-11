import styled from "styled-components";
import loja from "../../assets/img/loja.png";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
`;

export const Baner = styled.div`
  display: flex;
  flex: 1;
  background: url(${loja}) no-repeat center;
  margin: 0 auto;
  max-width: 95rem;
  height: 300px;
  background-size: cover;
`;

export const NavHome = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 95rem;
  background: ${(props) => props.theme.colors.background};
  flex-wrap: wrap;
  a {
    background: #3568;
    width: 12.5rem;
    margin: 0.5rem auto;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textTitle};
    img {
      margin-top: 0.5rem;
      height: 11rem;
      width: 11rem;
      border-radius: 1rem;
    }
    strong {
      font-size: 1.5rem;
    }

    &:hover {
      background-size: 80%;
    }
  }
`;

export const ProductList = styled.div`
  margin: 0 auto;
  max-width: 95rem;
  display: flex;
  flex-direction: unset;
  flex-wrap: wrap;
  /* text-align: center; */
  justify-content: center;
`;

export const Product = styled.div`
  margin: 0.5rem;
  background: ${(props) => props.theme.colors.productBackground};
  border-radius: 1rem;
  width: 18rem;
  text-align: center;
  flex-direction: column;
  img {
    margin-top: 1rem;
    width: 16rem;
    border-radius: 1rem;
  }
`;
