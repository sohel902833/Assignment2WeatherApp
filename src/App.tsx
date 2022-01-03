import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import CountryDetails from "./components/pages/CountryDetails";

interface Props {}
function App(props: Props) {
  const {} = props;

  return (
    <div data-testid="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/details/:countryName"
            component={CountryDetails}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
