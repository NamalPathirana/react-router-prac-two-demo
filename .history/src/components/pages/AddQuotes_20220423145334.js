import { Fragment ,useEffect } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import QuoteForm from "../quotes/QuoteForm";
import {addQuote} from "../../lib/api";

const AddQuotes = () => {

    const history = useHistory();
    const {sendRequest,httpState:status} = useHttp(addQuote);

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes');
        }
    },[status,history]);

    const addQuotesHandler = (quoteData) => {
        sendRequest(quoteData);
    }

    return <Fragment>
       <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuotesHandler}/>
    </Fragment>
}

export default AddQuotes;