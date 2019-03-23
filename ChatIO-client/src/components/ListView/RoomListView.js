import React from "react";
import RoomListViewItem from "../ListViewItem/RoomListViewItem";
import SocketContext from "../../contexts/SocketContext";
import { connect } from "react-redux";
import { setCurrentRoom } from "../../actions/roomActions";

class RoomListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: "",
      topic: ""
    };

    this.onInput = this.onInput.bind(this);
    this.submitRoom = this.submitRoom.bind(this);
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitRoom() {
    console.log(this.state.roomName + " " + this.state.topic);

    const { socket } = this.context;
    const { setCurrentRoom } = this.props;
    const { roomName, topic } = this.state;

    const joinObj = {};
    joinObj.room = roomName;

    const topicObj = {};
    topicObj.room = roomName;
    topicObj.topic = topic;

    socket.emit("joinroom", joinObj, (valid, reason) => {
      if (valid) {
        console.log("Created room");

        console.log("setting topic");
        socket.emit("settopic", topicObj, valid => {
          if (valid) {
            console.log("set topic worked");

            // get new rooms list
            socket.emit("rooms");
          } else {
            console.log("set topic failed");
          }
        });
      } else {
        console.log("Cannot join this chat because of " + reason);
      }
    });
  }

  render() {
    const { roomList } = this.props;

    return (
      <div className="room-section">
        <h3 className="room-list-header">Rooms</h3>
        <ul className="room-list">
          {Object.keys(roomList).map(key => (
            <RoomListViewItem key={key} roomName={key} room={roomList[key]} />
          ))}
        </ul>
        <div className="create-room-form">
          <input
            type="text"
            placeholder="Room name"
            className="create-room-input"
            name="roomName"
            onInput={e => this.onInput(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Room topic"
            className="create-room-input"
            name="topic"
            onInput={e => this.onInput(e)}
          />
          <br />
          <button onClick={this.submitRoom} className="sign-in-btn">
            Create room
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {};
};

RoomListView.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { setCurrentRoom }
)(RoomListView);
