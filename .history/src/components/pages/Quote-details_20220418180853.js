import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";


const QuotesDetails = () => {

    const params = useParams();

    return <Fragment>
        <p>details of product: {params.quoteID}</p>
        <Route path={`/quotes/${params.quoteID}/comments`}>
            <p>Comments...</p>
        </Route>
    </Fragment>
}

export default QuotesDetails;