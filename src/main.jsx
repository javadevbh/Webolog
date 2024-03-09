import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/fonts.css";
import "./styles/index.css";
import theme from "./mui/theme.js";
import { ThemeProvider } from "@mui/material";

const client = new ApolloClient({
  uri: import.meta.env.VITE_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);
