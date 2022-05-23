import classes from "./Home.module.css";
import { Fragment } from "react";
import Card from "../Components/Card";
import { cards } from "../db/index";
import Countdown from "../Components/Countdown";
import Button from "../Components/UI/Button";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";
import imgHeader from '../assets/home/Group_36.svg';
function Home() {
  const history = useHistory();

  const signUpHandler = () => {
    history.push("/signup");
  };

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <section className={classes["first-section"]}>
          <img
            className={classes.charts}
            src={imgHeader}
            alt="illustration charts"
          />
          <div className={classes["section-text"]}>
            <h1 className={classes.title}>
              Ofrecer soluciones de software y equipos de desarrollo de primera clase
            </h1>
            <p className={classes["text-content"]}>
              Somos expertos en la construcción de soluciones de software de alto rendimiento y proporcionamos combinando el conocimiento del negocio con las tecnologías
              y el diseño más avanzados. Combinando los conocimientos empresariales con las tecnologías y el diseño más avanzados.
            </p>
            <Button
              text="Email"
              className={classes.button}
              onClick={signUpHandler}
            />
          </div>
        </section>
        <section className={classes["cards-container"]}>
          {cards.map((card, i) => (
            <Card
              key={i}
              planType={card.planType}
              planPrice={card.planPrice}
              planText={card.planText}
              planListFeatures={card.planListFeatures}
            />
          ))}
        </section>
        <section className={classes["cards-container"]}>
          {cards.map((card, i) => (
            <Card
              key={i}
              planType={card.planType}
              planPrice={card.planPrice}
              planText={card.planText}
              planListFeatures={card.planListFeatures}
            />
          ))}
        </section>
        {/* <Countdown needButton={true} /> */}
      </main>
    </Fragment>
  );
}

export default Home;
