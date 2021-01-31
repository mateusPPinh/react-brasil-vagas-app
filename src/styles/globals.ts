import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Noto Sans JP', sans-serif;
    background: #f3f3f3;
  }

  #root {
    margin: 0 auto;
    padding: 24px 20px;
    max-width: 900px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  button, input {
    font: 15px Noto Sans JP 400;
  }
`;
