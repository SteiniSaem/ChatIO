import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "../components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
};

export default App;
