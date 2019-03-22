import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Chat from "../components/Chat/Chat";
import { updateUsers } from "../actions/roomActions";
import { connect } from "react-redux";
import SocketContext from "../contexts/SocketContext";
import { updateChat } from "../actions/roomActions";

class App extends React.Component {
  componentDidMount() {
    // listen on socket?
    // rooms
    // users

    const { socket } = this.context;
    const { updateChat, updateUsers } = this.props;

    socket.on("userList", users => {
      // call action
    });

    socket.on("roomList", rooms => {
      // call action
    });

    socket.on("updateusers", (room, users, ops) => {
      console.log("Updating users ");

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
    socket.on("updatechat", (room, msghistory) => {
      console.log("got msg history");
      console.log(msghistory);

      const messageObj = {};
      messageObj["roomName"] = room;
      messageObj["messageHistory"] = msghistory;

      updateChat(messageObj);
    });

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
  return {
    nickName: reduxStoreState.user.nickName
  };
};

App.contextType = SocketContext;

export default withRouter(
  connect(
    mapStateToProps,

    { updateChat, updateUsers }
  )(App)
);
