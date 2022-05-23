import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { Route, Switch, useLocation } from "react-router-dom";
import classes from "./App.module.css";

function App() {
  const location = useLocation();

  const CSS_CLASSES = `${classes.container} ${
    location.pathname === "/signup" && classes["bg-signup"]
  }`;

  return (
    <div className={CSS_CLASSES}>
      <Switch>
        <Route path="/" exact>
          <div className={classes["home-container"]}>
            <Home />
          </div>
        </Route>
        <Route path="/signup">
          <div className={classes["signup-container"]}>
            <SignUp />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
