import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "learning react is fun" },
  { id: "q2", author: "Maximilan", text: "react is great!" },
];

const QuotesDetails = () => {
  const params = useParams();

  return (
    <Fragment>
      <p>details of product: {params.quoteID}</p>
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
