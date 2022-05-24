import classes from "./Countdown.module.css";
import Button from "./UI/Button";
import { Countdown as TypeCountdown } from "./helpers/types";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

let countDate = 4089374000; /*  47 Days - 07 Hours - 56 Min - 14 Sec */
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function Countdown(props: TypeCountdown) {
  const { needButton } = props;
  const history = useHistory();

  const [currentDay, setCurrentDay] = useState(47);
  const [currentHour, setCurrentHour] = useState(7);
  const [currentMinute, setCurrentMinute] = useState(56);
  const [currentSecond, setCurrentSecond] = useState(14);

  const signUpHandler = () => {
    history.push("/signup");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      countDate = countDate - second;
      const tempDay = Math.floor(countDate / day);
      const tempHour = Math.floor((countDate % day) / hour);
      const tempMinute = Math.floor((countDate % hour) / minute);
      const tempSecond = Math.floor((countDate % minute) / second);

      if (countDate < 0) {
        clearInterval(interval);
      } else {
        setCurrentDay(tempDay);
        setCurrentHour(tempHour);
        setCurrentMinute(tempMinute);
        setCurrentSecond(tempSecond);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className={`${classes["countdown-container"]} ${
        !needButton && classes["sign-up"]
      }`}
    >
      <h3>
        Coming <span>4 Nov 2020</span>
      </h3>
      <div className={classes["countdown-timer"]}>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>{currentDay}</p>
          <p className={classes.text}>Days</p>
        </div>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>
            {currentHour < 10 ? `0${currentHour}` : currentHour}
          </p>
          <p className={classes.text}>Hours</p>
        </div>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>{currentMinute}</p>
          <p className={classes.text}>Min</p>
        </div>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>
            {currentSecond < 10 ? `0${currentSecond}` : currentSecond}
          </p>
          <p className={classes.text}>Sec</p>
        </div>
      </div>
      {needButton && (
        <Button
          text="Get Started"
          className={classes.button}
          onClick={signUpHandler}
        />
      )}
    </section>
  );
}

export default Countdown;
