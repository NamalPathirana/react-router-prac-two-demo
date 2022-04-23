import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import AddQuotes from "./components/pages/AddQuotes";
import QuotesDetails from "./components/pages/Quote-details";
import Quotes from "./components/pages/Quotes";
import classes from "./Layout.module.css";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className={classes.main}>
        <Switch>
          <Route to="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route to="/quotes" exact>
            <Quotes></Quotes>
          </Route>
          <Route to="/quotes/:quoteID">
            <QuotesDetails></QuotesDetails>
          </Route>
          <Route to="/add-quotes" exact>
            <AddQuotes></AddQuotes>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
