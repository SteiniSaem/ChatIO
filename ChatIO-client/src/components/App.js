import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Chat from "../components/Chat/Chat";
import SocketContext from "../contexts/SocketContext";

class App extends React.Component {
  componentDidMount() {
    // listen on socket?
    // rooms
    // users

    const { socket } = this.context;

    socket.on("userList", users => {
      console.log("Got user list from server");
    });

    socket.on("roomList", rooms => {
      console.log("Got room list from server");
    });
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </div>
    );
  }
}

App.contextType = SocketContext;

export default App;
