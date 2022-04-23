import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Quotes from "./components/pages/Quotes";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Route to="/Quotes/">
          <Quotes></Quotes>
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
