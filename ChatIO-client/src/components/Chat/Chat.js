import React from "react";
import Rooms from "../Rooms/Rooms";
import Users from "../Users/Users";
import ChatWindow from "../ChatWindow/ChatWindow";
import PrivateMessages from "../Messages/PrivateMessages";

import { connect } from "react-redux";
import { updateRooms } from "../../actions/roomActions";

import SocketContext from "../../contexts/SocketContext";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { socket } = this.context;

    socket.emit("rooms");
  }

  render() {
    const { rooms, currentRoom, nickName, privateMessages } = this.props;
    let chat;

    if (currentRoom != "") {
      chat = <ChatWindow room={rooms[currentRoom]} roomName={currentRoom} />;
    } else {
      chat = "";
    }

    let all;

    if (nickName != "") {
      all = (
        <div className="chat">
          <Rooms roomList={rooms} />
          {chat}
          <div className="pvt-msg">
            <h1>Private messages</h1>
            {privateMessages.length != 0 && (
              <PrivateMessages messages={privateMessages} />
            )}
            {privateMessages.length == 0 && (
              <p>You don't have any private messages</p>
            )}
          </div>
        </div>
      );
    } else {
      all = <h1>You have to log in matey</h1>;
    }

    return all;
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    rooms: reduxStoreState.room.rooms,
    currentRoom: reduxStoreState.room.currentRoom,
    nickName: reduxStoreState.user.nickName,
    privateMessages: reduxStoreState.user.privateMessages
  };
};

Chat.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { updateRooms }
)(Chat);
