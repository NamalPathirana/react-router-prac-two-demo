import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes,ascending) => {
  return quotes.sort((quoteA,quoteB)=>{
    if(ascending){
      return quoteA.id > quoteB.id ? 1: -1;
    }else{
      return quoteA.id < quoteB.id ? 1: -1;
    }
  });
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get('sort') === 'asc';

  const onSortingHandler = () => {
    history.push(`${location.pathname}?sort=${(isAscending?'desc':'asc')}`);
    console.log('Location'+location);
    console.log('match'+match);
  }

  const sortedQuery = sortQuotes(props.quotes,isAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onSortingHandler}>
          {isAscending?'Descending':'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuery.map((quote) => (
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
