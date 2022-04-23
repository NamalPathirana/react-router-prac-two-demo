import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const DUMMY_QUOTES = [
  { id:'q1', author:'Max', text:'learning react is fun'},
  { id:'q2', author:'Maximilan', text:'react is great!'},
];

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
