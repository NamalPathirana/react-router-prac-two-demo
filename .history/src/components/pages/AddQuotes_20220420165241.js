import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";

const AddQuotes = () => {

    const history = useHistory();

    const addQuotesHandler = (quoteData) => {
        console.log(quoteData);
        history.push("/quotes");
    }

    return <Fragment>
       <QuoteForm onAddQuote={addQuotesHandler}/>
    </Fragment>
}

export default AddQuotes;