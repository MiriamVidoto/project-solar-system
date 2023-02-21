import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default GlobalStyle;
