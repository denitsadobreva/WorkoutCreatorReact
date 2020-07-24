import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { Header, Footer } from "./components";
import { Routes } from "./routing/Routes";
import "./App.css";

const App = () => {
  return (
      <BrowserRouter>
        <Fragment>
          <ThemeProvider theme={theme}>
            <CSSReset />
            <Header />
            <Switch>
              <Route component={Routes} />
            </Switch>
          </ThemeProvider>
        </Fragment>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
