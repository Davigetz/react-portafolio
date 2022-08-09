import { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { HelmetMeta } from "./components/Helmet/HelmetMeta";
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
