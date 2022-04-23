import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "learning react is fun" },
  { id: "q2", author: "Maximilan", text: "react is great!" },
];

const QuotesDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((element)=>{return element.id === params.quoteID});

  if(!quote){
      return <p>No quote found.</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
