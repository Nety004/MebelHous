import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body {
    border: 0;
    padding: 0px 160px;
    box-sizing: border-box;
    background: #fff;
    color: #222;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 300;
  }
`;
