import React from "react";
import { connect } from "react-redux";
import { setCurrentRoom, updateUsers } from "../../actions/roomActions";
import SocketContext from "../../contexts/SocketContext";

class RoomListViewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.room
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { setCurrentRoom, roomName, rooms, currentRoom } = this.props;
    const { socket } = this.context;

    // emit joinroom
    const joinObj = {};
    joinObj.room = roomName;

    if (currentRoom != "") {
      document.getElementById(currentRoom).classList.remove("selected");
      socket.emit("partroom", currentRoom);
    }

    socket.emit("joinroom", joinObj, (valid, reason) => {
      if (valid) {
        console.log("joined room");

        setCurrentRoom(roomName);
      } else {
        console.log("Cannot join this chat because of " + reason);
      }

      document.getElementById(roomName).classList.add("selected");
    });
  }

  render() {
    const { roomName } = this.props;
    return (
      <li id={roomName} onClick={this.handleClick} className="room-list-item">
        {roomName}
      </li>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {
    currentRoom: reduxStoreState.room.currentRoom,
    rooms: reduxStoreState.room.rooms
  };
};

RoomListViewItem.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { setCurrentRoom, updateUsers }
)(RoomListViewItem);
