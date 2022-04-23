import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import useHttp from "../../hooks/use-http";
import QuoteForm from "../quotes/QuoteForm";

const AddQuotes = () => {

    const history = useHistory();
    const {sendRequest,httpState} = useHttp();

    useEffect(()=>{
        if(httpState === 'completed'){
            history.push('/quotes');
        }
    },[httpState,history]);

    const addQuotesHandler = (quoteData) => {
        sendRequest(quoteData);
        history.push("/quotes");
    }

    return <Fragment>
       <QuoteForm onAddQuote={addQuotesHandler}/>
    </Fragment>
}

export default AddQuotes;