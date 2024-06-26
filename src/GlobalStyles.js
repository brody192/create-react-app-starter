// Crie um arquivo chamado GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    src: url('/fonts/GeneralSans-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    src: url('/fonts/GeneralSans-Semibold.otf') format('opentype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 700;
    src: url('/fonts/GeneralSans-Bold.otf') format('opentype');
  }

  body {
    font-family: 'GeneralSans', sans-serif;
  }
`;

export default GlobalStyle;
