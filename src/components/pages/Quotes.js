import { useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import QuotesList from "../quotes/QuoteList";
import { getAllQuotes } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "learning react is fun" },
  { id: "q2", author: "Maximilan", text: "react is great!" },
];

const Quotes = () => {
  const { sendRequest, status, data, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
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

  if (status === "completed" && (!data || data.length === 0)) {
    return <NoQuotesFound></NoQuotesFound>;
  }

  return <QuotesList quotes={data}></QuotesList>;
};

export default Quotes;
