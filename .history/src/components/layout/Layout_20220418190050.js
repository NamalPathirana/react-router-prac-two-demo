import { Fragment } from "react";
import Header from "./Header";
import classes from "./Layout.module.css"


const Layout = (props) => {
    return <Fragment>
        <Header></Header>
        <main className={classes.main} >{props.children}</main>
    </Fragment>
}


export default Layout;