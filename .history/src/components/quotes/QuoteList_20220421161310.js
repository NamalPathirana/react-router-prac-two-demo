import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get('sort') === 'asc';

  const onSortingHandler = () => {
    history.push('/quotes?sort='+isAscending?'desc':'ace');
    console.log(location.search);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onSortingHandler}>
          sort
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
