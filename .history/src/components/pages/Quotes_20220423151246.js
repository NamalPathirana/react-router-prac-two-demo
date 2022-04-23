import { Fragment  } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import QuotesList from "../quotes/QuoteList";
import {getAllQuotes} from "../../lib/api";

const DUMMY_QUOTES = [
    { id:'q1', author:'Max', text:'learning react is fun'},
    { id:'q2', author:'Maximilan', text:'react is great!'},
];

const Quotes = () => {

    const {sendRequest,status,data,error} = useHttp(getAllQuotes);


    return <QuotesList quotes={DUMMY_QUOTES}></QuotesList>
}

export default Quotes;