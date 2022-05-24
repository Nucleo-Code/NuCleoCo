import React from "react";
import classes from "./Form.module.css";
import Button from "./UI/Button";
import { useState, useRef } from "react";

function Form() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isPlanOptionsOpen, setIsPlanOptionsOpen] = useState(false);
  const [plan, setPlan] = useState({
    name: "Basic Pack",
    price: "Free",
  });

  const planOptionsHandler = () => {
    setIsPlanOptionsOpen((state) => !state);
  };

  const selectPlanHandler = (plan: { name: string; price: string }) => {
    setPlan(plan);
    setIsPlanOptionsOpen(false);
  };

  const arrowClass = isPlanOptionsOpen ? classes.arrow : "";

  const validateForm = () => {
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    if (name?.trim() === "") {
      setIsInvalidName(true);
    } else {
      setIsInvalidName(false);
    }
    if (!email?.includes("@")) {
      setIsInvalidEmail(true);
    } else {
      setIsInvalidEmail(false);
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} noValidate>
      <div
        className={`${classes["input-container"]} ${
          isInvalidName && classes["invalid-input"]
        }`}
      >
        <input
          type="text"
          aria-label="name"
          placeholder="Name"
          className={classes["input-name"]}
          ref={nameInputRef}
        />
        {isInvalidName && (
          <img
            src="./assets/sign-up/icon-cross.svg"
            alt="cross icon"
            className={classes["cross-icon"]}
          />
        )}
      </div>
      <div
        className={`${classes["input-container"]} ${
          isInvalidEmail && classes["invalid-input"]
        }`}
      >
        <input
          type="email"
          aria-label="email"
          placeholder="Email Address"
          className={classes["input-email"]}
          ref={emailInputRef}
        />
        {isInvalidEmail && (
          <img
            src="./assets/sign-up/icon-cross.svg"
            alt="cross icon"
            className={classes["cross-icon"]}
          />
        )}
      </div>
      {/* <div className={classes["select-plan"]}>
        <div className={classes["current-plan"]} onClick={planOptionsHandler}>
          <p>
            {plan.name} <span>{plan.price}</span>
          </p>
          <img
            src="./assets/sign-up/icon-arrow-down.svg"
            alt="arrow"
            className={arrowClass}
          />
        </div>
        {isPlanOptionsOpen && (
          <div className={classes["plan-options"]}>
            <div
              className={classes.plan}
              onClick={() =>
                selectPlanHandler({ name: "Basic Pack", price: "Free" })
              }
            >
              <p>
                Basic Pack <span>Free</span>
              </p>
              {plan.name === "Basic Pack" && (
                <img src="./assets/sign-up/icon-check.svg" alt="check icon" />
              )}
            </div>
            <div
              className={classes.plan}
              onClick={() =>
                selectPlanHandler({ name: "Pro Pack", price: "$9.99" })
              }
            >
              <p>
                Pro Pack <span>$9.99</span>
              </p>
              {plan.name === "Pro Pack" && (
                <img src="./assets/sign-up/icon-check.svg" alt="check icon" />
              )}
            </div>
            <div
              className={classes.plan}
              onClick={() =>
                selectPlanHandler({ name: "Ultimate Pack", price: "$19.99" })
              }
            >
              <p>
                Ultimate Pack <span>$19.99</span>
              </p>
              {plan.name === "Ultimate Pack" && (
                <img src="./assets/sign-up/icon-check.svg" alt="check icon" />
              )}
            </div>
          </div>
        )}
      </div> */}
      <input
        type="phone"
        aria-label="phone"
        placeholder="Phone Number"
        className={classes["input-phone"]}
      />
      <input
        type="text"
        aria-label="company"
        placeholder="Company"
        className={classes["input-company"]}
      />
      <Button text="Send" className={classes.button} />
    </form>
  );
}

export default Form;
