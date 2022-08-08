import { useDispatch } from "react-redux";
import { changeTheme } from "./redux/recipes/theme.Slice";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { HelmetMeta } from "./components/Helmet/HelmetMeta";
import { lazy, useEffect, useState } from "react";
import { Home } from "./pages/Home";

const NotFound = lazy(() =>
  import("./pages/NotFound/Index").then(({ NotFound }) => ({
    default: NotFound,
  }))
);

function App() {
  return (
    <Router>
      <HelmetMeta />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
