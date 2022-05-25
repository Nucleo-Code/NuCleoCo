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
        <li><a href="#" className={classes.divMenuLink}>Servicio</a></li>
    
        <li> <a href="#"  className={classes.divMenuLink}>Sobre nosotros</a></li>
        
        <li> <a href="#"  className={classes.divMenuLink}>Contactanos</a></li>
       
      </div>   
    </header>
  );
}

export default Header;
