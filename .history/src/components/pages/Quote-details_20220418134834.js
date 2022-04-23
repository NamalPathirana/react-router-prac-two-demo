import { Fragment } from "react";
import { useParams } from "react-router-dom";


const QuotesDetails = () => {

    const params = useParams();

    return <Fragment>
        <p>details of product: {params.quoteID}</p>
    </Fragment>
}

export default QuotesDetails;