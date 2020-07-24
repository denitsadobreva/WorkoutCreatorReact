import React, { Fragment } from "react";
import { Provider } from "mobx-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { Routes } from "./routing/Routes";
import "./App.css";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
