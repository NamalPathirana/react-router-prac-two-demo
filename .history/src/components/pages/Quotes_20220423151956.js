import { Fragment } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import QuotesList from "../quotes/QuoteList";
import { getAllQuotes } from "../../lib/api";
import { useEffect } from "react/cjs/react.production.min";
import LoadingSpinner from "../UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "learning react is fun" },
  { id: "q2", author: "Maximilan", text: "react is great!" },
];

const Quotes = () => {
  const { sendRequest, status, data, error } = useHttp(getAllQuotes);

  useEffect(() => {
    sendRequest(getAllQuotes);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "complete" && (!data || data.lenth === 0)) {
      return <NoQuotesFound></NoQuotesFound>
  }

  return <QuotesList quotes={DUMMY_QUOTES}></QuotesList>;
};

export default Quotes;
