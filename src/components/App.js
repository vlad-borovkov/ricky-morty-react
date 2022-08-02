import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

import "./../index.css";
import Header from "./Header.js";
import Main from "./Main";
import Episode from "./Episode";

const App = () => {
  return (
    <>
      <Header />
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/episode">
            <Episode />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
