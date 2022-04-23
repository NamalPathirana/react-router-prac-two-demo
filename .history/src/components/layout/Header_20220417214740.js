import classes from "./MainNavigation.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>Great Quotes</p>
      <ul className={classes.ul}>
          <li>All Quotes</li>
          <li>Add Qoutes</li>
      </ul>
    </header>
  );
};

export default Header;
