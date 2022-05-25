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
      <div className ={classes.headerright}>
        <a href="#servicio"><b>Servicio</b></a>
        <a></a>
        <a href="#informacion"><b>Sobre nosotros</b></a>
        <a></a>
        <a href="#contacto"><b>Contactanos</b></a>
        <a></a>
      </div>   
    </header>
  );
}

export default Header;
