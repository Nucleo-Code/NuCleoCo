import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";

import img from '../assets/home/Group_35.svg';

function Header() {
  const history = useHistory();

  const logoHandler = () => {
    history.push("/");
  };

  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src={img}
        alt="logo"
        onClick={logoHandler}
      />
    </header>
  );
}

export default Header;
