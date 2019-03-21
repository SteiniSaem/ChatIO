import React from "react";
import { connect } from "react-redux";
import Users from "../Users/Users";
import Messages from "../Messages/Messages";
import SocketContext from "../../contexts/SocketContext";

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: ""
    };

    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage() {
    const { socket } = this.context;
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
              <p>chat text here</p>
              <Messages messages={room.messageHistory} />
            </div>
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
  return {
    nickName: reduxStoreState.user.nickName
  };
};

ChatWindow.contextType = SocketContext;

export default connect(mapStateToProps)(ChatWindow);
