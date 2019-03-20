import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Chat from "../components/Chat/Chat";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/chat" component={Landing} />
        <Route path="/" component={Chat} />
      </Switch>
    </div>
  );
};

export default App;
