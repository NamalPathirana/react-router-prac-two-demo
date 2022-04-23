import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Quotes from "./components/pages/Quotes";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Switch>
          <Route to="/Quotes" exact>
            <Quotes></Quotes>
          </Route>
          <Route to="/Quotes/:quoteID">
            <Quotes></Quotes>
          </Route>
          <Route to="/Quotes">
            <Quotes></Quotes>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
