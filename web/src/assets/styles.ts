import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{

      /*tamanho da fonte padão: 16px - 100% - 1rem*/
      font-size: 60%; /* controle das medidas rem */
  }
  * {
    margin: 0;
    bottom: 0;
  }

  p, h1, h2,h3{
    margin: 0;
    font-size: 16px
  }
  #root{
    margin:0;
    padding: 0;
    border:0;
  }

  @media ( min-width: 700px){
    :root{
        font-size: 62.5%; /* todo 1rem vai ser relativo a 10px*/
    }
}
`;
