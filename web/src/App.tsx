import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles";
// import dark from "./styles/themes/dark";
import ligth from "./styles/themes/light";
import Routes from "./routes";

const App: React.FC = () => {
  const [theme] = useState(ligth);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
