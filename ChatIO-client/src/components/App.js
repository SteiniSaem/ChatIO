import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Chat from "../components/Chat/Chat";
import { connect } from "react-redux";
import SocketContext from "../contexts/SocketContext";
import {
  updateChat,
  updateUsers,
  updateTopic,
  updateRooms,
  setCurrentRoom
} from "../actions/roomActions";

import { privateMsg } from "../actions/userActions";

class App extends React.Component {
  componentDidMount() {
    const { socket } = this.context;
    const {
      updateChat,
      updateUsers,
      updateTopic,
      updateRooms,
      privateMsg,
      setCurrentRoom,
      nickName
    } = this.props;

    // roomlist
    socket.on("roomlist", rooms => {
      updateRooms({ rooms });
    });

    // updateusers
    socket.on("updateusers", (room, users, ops) => {
      const userObj = {};
      userObj["roomName"] = room;
      userObj["userList"] = users;
      userObj["opList"] = ops;

      updateUsers(userObj);
    });

    // servermessage

    // updatechat
    socket.on("updatechat", (room, msghistory) => {
      const messageObj = {};
      messageObj["roomName"] = room;
      messageObj["messageHistory"] = msghistory;

      updateChat(messageObj);
    });

    // updatetopic
    socket.on("updatetopic", (room, topic, nickName) => {
      const obj = {};
      obj["roomName"] = room;
      obj["topic"] = topic;
      obj["nickName"] = nickName;

      updateTopic(obj);
    });

    // recv private message
    socket.on("recv_privatemsg", (nickName, message) => {
      const privgMsgObj = {};
      privgMsgObj["nickName"] = nickName;
      privgMsgObj["message"] = message;

      privateMsg(privgMsgObj);
    });

    // kicked
    socket.on("kicked", (room, kickedUser, user) => {
      if (this.props.nickName == kickedUser) {
        setCurrentRoom("");
      }
    });

    // banned
    socket.on("banned", (room, bannedUser, user) => {
      if (this.props.nickName == bannedUser) {
        setCurrentRoom("");

        alert("You have been banned from this channel");
      }
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

const mapStateToProps = reduxStoreState => {
  return {
    nickName: reduxStoreState.user.nickName
  };
};

App.contextType = SocketContext;

export default withRouter(
  connect(
    mapStateToProps,

    {
      updateChat,
      updateUsers,
      updateTopic,
      updateRooms,
      privateMsg,
      setCurrentRoom
    }
  )(App)
);
