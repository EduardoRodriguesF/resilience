import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #e6e7ee;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Poppins, sans-serif;
  }

  p, span {
    font-family: Overpass, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
