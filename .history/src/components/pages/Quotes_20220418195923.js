import { Fragment  } from "react";
import { Link } from "react-router-dom";

const DUMMY_QUOTES = [
    { id:'q1', author:'Max', text:'learning react is fun'},
    { id:'q2', author:'Maximilan', text:'react is great!'},
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