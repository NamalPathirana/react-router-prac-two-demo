import { Fragment } from "react";
import QuoteForm from "../quotes/QuoteForm"

const AddQuotes = () => {

    const addQuotesHandler = (quoteData) => {
        console.log(quoteData);
    }

    return <Fragment>
       <QuoteForm onAddQuote={addQuotesHandler}/>
    </Fragment>
}

export default AddQuotes;