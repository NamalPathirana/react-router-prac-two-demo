import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import AddQuotes from "./components/pages/AddQuotes";
import QuotesDetails from "./components/pages/AddQuotes";
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
            <QuotesDetails></QuotesDetails>
          </Route>
          <Route to="/Quotes">
            <AddQuotes></AddQuotes>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
