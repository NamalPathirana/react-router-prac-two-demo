import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>Great Quotes</p>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/add-quotes">Add Quotes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
