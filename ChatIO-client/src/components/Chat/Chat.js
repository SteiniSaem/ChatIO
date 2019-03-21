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

    this.state = {
      currentRoom: {}
    };
  }

  componentDidMount() {
    const { socket } = this.context;
    const { updateRooms } = this.props;

    socket.emit("rooms");

    socket.on("roomlist", rooms => {
      console.log("getting updated rooms");
      console.log(rooms);
      updateRooms({ rooms });
    });
  }

  render() {
    const { rooms, currentRoom } = this.props;

    console.log("this is rooms");
    console.log(rooms.lobby);

    let chat;

    if (currentRoom != null) {
      let roomName = Object.keys(currentRoom)[0];
      chat = <ChatWindow room={currentRoom[roomName]} />;
    } else {
      chat = <h1>No lobby selected</h1>;
    }

    return (
      <div className="chat">
        <Rooms roomList={rooms} />
        {chat}
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {
    rooms: reduxStoreState.room.rooms,
    currentRoom: reduxStoreState.room.currentRoom
  };
};

Chat.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { updateRooms }
)(Chat);
