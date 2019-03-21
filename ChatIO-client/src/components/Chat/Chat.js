import React from "react";
import Rooms from "../Rooms/Rooms";
import Users from "../Users/Users";

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
    const { rooms } = this.props;
    console.log("this is rooms");
    console.log(rooms.lobby);
    return (
      <div className="chat">
        <Rooms roomList={rooms} />

        <div className="chat-text">
          <div className="chat-box">
            <p>halo</p>
          </div>
          <div className="text-box">
            <input type="text" className="msg-input" />
            <button className="send-btn sign-in-btn">Send</button>
          </div>
        </div>

        <Users />
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {
    rooms: reduxStoreState.room.rooms
  };
};

Chat.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { updateRooms }
)(Chat);
