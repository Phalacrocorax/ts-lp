import React from "react";
import HomePage from "./../home";
import Features from "./../features";
import About from "./../about";
import { Switch, Route, Router } from "./../../util/router.js";
// import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    // <ProvideAuth>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features/:id" component={Features} />
        <Route path="/about/" component={About} />

        <Route
          component={({ location }) => {
            return (
              <div
                style={{
                  padding: "50px",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
    // </ProvideAuth>
  );
}

export default App;
