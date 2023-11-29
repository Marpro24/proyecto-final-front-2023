import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./components/App/App";
import Header from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <App />
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
