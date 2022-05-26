import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/home/Group_35.svg';
import { createSolutionBuilderWithWatchHost } from "typescript";


function Header() {
  const history = useHistory();

  const logoHandler = () => {
    history.push("/");
  };
  function accionBoton(){
    console.log("Hola mundo")
  }

  return (
    <header className={classes.header}>
      <script src="https://kit.fontawesome.com/03f47b868f.js" crossOrigin="anonymous"></script>
      <button onClick={()=>accionBoton()} className={classes.toggle}><FontAwesomeIcon icon={faBars} /></button>
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
