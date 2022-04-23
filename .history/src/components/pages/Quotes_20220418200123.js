import { Fragment  } from "react";
import { Link } from "react-router-dom";
import QuotesList from "../quotes/QuoteList"

const DUMMY_QUOTES = [
    { id:'q1', author:'Max', text:'learning react is fun'},
    { id:'q2', author:'Maximilan', text:'react is great!'},
];

const Quotes = () => {
    return  <QuotesList></QuotesList>
}

export default Quotes;