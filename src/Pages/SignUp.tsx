import { Fragment } from "react";
import Countdown from "../Components/Countdown";
import Form from "../Components/Form";
import Header from "../Components/Header";
import classes from "./SignUp.module.css";
import imgEmail from '../assets/email.svg'

function SignUp() {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>

        <h1 className={classes.title}>Obten el mejor servicio de latinoamerica</h1>
        <p className={classes["text-content"]}>
          Puedes contactarno para poder brindarte un servicio con exelencia y calidad de software
        </p>
        
        <img className={classes.countdown} src={imgEmail} alt="Logo" width="60%"  />
    
        <div className={classes.form}>
          <Form />
        </div>
      </main>
    </Fragment>
  );
}

export default SignUp;
