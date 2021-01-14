import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "./assets/styles";

import Routes from "./routes";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./styles/defaltStateTheme";
import { AuthProvider } from "./hooks/Auth";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme]);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
