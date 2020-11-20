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

  body, html {
    overflow-x: hidden;

    @media (max-width: 800px) {
      overflow-x: visible;
    }
  }

  body, input, button {
    font: 1.2rem Poppins, sans-serif;
  }

  p, span, li, a {
    font-family: Overpass, sans-serif;
  }

  strong {
    color: #000;
  }

  button {
    cursor: pointer;
  }
`;
