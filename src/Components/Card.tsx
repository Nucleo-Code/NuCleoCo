import classes from "./Card.module.css";
import { Card as Props } from "./helpers/types";
import Button from "./UI/Button";

function Card(props: Props) {
  const { planType, planPrice, planText,  } = props;

  const cardClass = `${classes.card} ${
    planType === "Pro" ? classes["plan-type-pro"] : ""
  }`;

  return (
    <section className={cardClass}>
      <h2 className={classes["plan-type"]}>{planType}</h2>
      <h1 className={classes["plan-price"]}>{planPrice}</h1>
      <p className={classes["plan-text"]}>{planText}</p>
      
      {/* <Button text="Try for Free" className={classes.button} /> */}
    </section>
  );
}

export default Card;
