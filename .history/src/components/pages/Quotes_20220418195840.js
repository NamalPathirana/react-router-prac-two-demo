import { Fragment  } from "react";
import { Link } from "react-router-dom";

const DUMMY_QUOTES = [
    { id:'id', author:'Max', text:'learning react is fun'},
    { id:'id', author:'Max', text:'learning react is fun'},

];

const Quotes = () => {
    return <Fragment>
        <p>Quotes Page..</p>
        <ul>
            <li><Link to="/quotes/q1">left or right</Link></li>
        </ul>
    </Fragment>
}

export default Quotes;