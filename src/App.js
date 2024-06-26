import React from "react";
import { AuthProvider } from "../src/context/Auth";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";

import AppRoutes from "./pages/Routes";
import Theme from './styles'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
