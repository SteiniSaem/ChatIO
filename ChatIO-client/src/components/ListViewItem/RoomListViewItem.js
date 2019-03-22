import React from "react";
import { connect } from "react-redux";
import { setCurrentRoom } from "../../actions/roomActions";
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
    const { setCurrentRoom, roomName } = this.props;
    const { socket } = this.context;

    // emit joinroom
    const joinObj = {};
    joinObj.room = roomName;

    socket.emit("joinroom", joinObj, (valid, reason) => {
      if (valid) {
        console.log("joined room");

        setCurrentRoom(roomName);
      } else {
        console.log("Cannot join this chat because of " + reason);
      }
    });
  }

  render() {
    const { roomName } = this.props;
    return (
      <li onClick={this.handleClick} className="room-list-item">
        {roomName}
      </li>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {};
};

RoomListViewItem.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { setCurrentRoom }
)(RoomListViewItem);
