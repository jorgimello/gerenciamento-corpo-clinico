import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Credenciamento from "./pages/Credenciamento";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/credenciamento" component={Credenciamento} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;