import React, { Fragment } from "react";
import { Provider } from "mobx-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { Header, Footer } from "./components";
import { Routes } from "./routing/Routes";
import "./App.css";

const App = () => {
  return (
    <Provider>
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
    </Provider>
  );
};

export default App;
