import React from "react";
import { connect } from "react-redux";
import Users from "../Users/Users";
import Messages from "../Messages/Messages";
import SocketContext from "../../contexts/SocketContext";
import { updateChat } from "../../actions/roomActions";

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: ""
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitMessage() {
    const { socket } = this.context;
    const { inputMessage } = this.state;
    const { roomName, updateChat } = this.props;

    console.log("msg is " + inputMessage);
    const data = {};
    data["roomName"] = roomName;
    data["msg"] = inputMessage;
    console.log(data);

    console.log("Sending msg data");
    socket.emit("sendmsg", data);

    socket.on("updatechat", (room, msghistory) => {
      console.log("got msg history");
      console.log(msghistory);

      const messageObj = {};
      messageObj["roomName"] = room;
      messageObj["messageHistory"] = msghistory;

      console.log("clearing input");
      document.getElementById("msg-input").value = "";

      updateChat(messageObj);
    });
  }

  render() {
    const { room } = this.props;

    return (
      <div className="not-room-list">
        <div className="chat-text">
          <div>
            <div className="chat-topic">
              <h1>{room.topic}</h1>
            </div>
            <div className="chat-box">
              <Messages messages={room.messageHistory} />
            </div>
          </div>
          <div className="text-box">
            <input
              name="inputMessage"
              onInput={e => this.onInput(e)}
              type="text"
              className="msg-input"
              id="msg-input"
            />
            <button
              onClick={this.submitMessage}
              className="send-btn sign-in-btn"
            >
              Send
            </button>
          </div>
        </div>
        <Users />
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    nickName: reduxStoreState.user.nickName
  };
};

ChatWindow.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { updateChat }
)(ChatWindow);
