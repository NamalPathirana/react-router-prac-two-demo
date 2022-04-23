import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuotes from "./components/pages/AddQuotes";
import NotFound from "./components/pages/NotFound";
import QuotesDetails from "./components/pages/Quote-details";
import Quotes from "./components/pages/Quotes";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <Quotes></Quotes>
          </Route>
          <Route path="/quotes/:quoteID">
            <QuotesDetails></QuotesDetails>
          </Route>
          <Route path="/add-quotes" exact>
            <AddQuotes></AddQuotes>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
