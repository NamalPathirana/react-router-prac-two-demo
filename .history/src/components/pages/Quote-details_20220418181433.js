import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";


const QuotesDetails = () => {

    const params = useParams();

    return <Fragment>
        <p>details of product: {params.quoteID}</p>
        <Route path={`/quotes/${params.quoteID}/comments`}>
            <Comm
        </Route>
    </Fragment>
}

export default QuotesDetails;