import { lazy, useEffect, useState } from "react";
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
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    console.log(userLocale);
    const predoLanguage = userLocale.split("-")[0];
    if (predoLanguage === "es") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }, []);
  return (
    <Router>
      <HelmetMeta language={language} />
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
