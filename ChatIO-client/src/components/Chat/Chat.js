import React from "react";
import Rooms from "../Rooms/Rooms";
import Users from "../Users/Users";
import ChatWindow from "../ChatWindow/ChatWindow";

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
    const { rooms, currentRoom, nickName } = this.props;

    console.log("this is rooms");
    console.log(rooms.lobby);

    let chat;

    if (currentRoom != "") {
      chat = <ChatWindow room={rooms[currentRoom]} roomName={currentRoom} />;
    } else {
      chat = <h1>Select a lobby to start chatting!</h1>;
    }

    let all;

    if (nickName != "") {
      all = (
        <div className="chat">
          <Rooms roomList={rooms} />
          {chat}
        </div>
      );
    } else {
      all = <h1>You have to log in matey</h1>;
    }

    return all;
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {
    rooms: reduxStoreState.room.rooms,
    currentRoom: reduxStoreState.room.currentRoom,
    nickName: reduxStoreState.user.nickName
  };
};

Chat.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { updateRooms }
)(Chat);
