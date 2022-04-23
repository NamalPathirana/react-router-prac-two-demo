import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>Great Quotes</p>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <NavLink to="">All Quotes</NavLink>
        </li>
        <li className={classes.li}>
          <NavLink to="">Add Quotes</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
