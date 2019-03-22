import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Chat from "../components/Chat/Chat";
import { updateUsers } from "../actions/roomActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SocketContext from "../contexts/SocketContext";

class App extends React.Component {
  componentDidMount() {
    // listen on socket?
    // rooms
    // users

    const { socket } = this.context;
    const { updateUsers } = this.props;

    socket.on("userList", users => {
      // call action
    });

    socket.on("roomList", rooms => {
      // call action
    });

    socket.on("updateusers", (room, users, ops) => {
      console.log("Updating users ");
      console.log(room);
      console.log(users);
      console.log(ops);
      const userObj = {};
      userObj["roomName"] = room;
      userObj["userList"] = users;
      userObj["opList"] = ops;
      updateUsers(userObj);
    });

    // updateusers

    // servermessage

    // updateusers

    // updatechat

    // updatetopic
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

const mapStateToProps = reduxStoreState => {
  return {};
};

App.contextType = SocketContext;

export default withRouter(
  connect(
    mapStateToProps,
    { updateUsers }
  )(App)
);
