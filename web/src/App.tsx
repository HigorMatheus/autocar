import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "./assets/styles";

import Routes from "./routes";
import Header from "./components/Header";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./styles/defaltStateTheme";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
