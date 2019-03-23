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

  componentDidMount() {
    $(".chat-box").scrollTop(
      $(".chat-box")
        .children()
        .height()
    );

    let input = document.getElementById("msg-input");

    input.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        document.getElementById("send-btn").click();
      }
    });

    $("body").on("DOMSubtreeModified", ".chat-box", function() {
      $(".chat-box").scrollTop(
        $(".chat-box")
          .children()
          .height()
      );
    });
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.value.toLowerCase() == "i have the power") {
      window.location = "https://www.youtube.com/watch?v=-dJolYw8tnk";
    }
  }

  submitMessage() {
    const { socket } = this.context;
    const { inputMessage } = this.state;
    const { roomName } = this.props;

    console.log("msg is " + inputMessage);
    const data = {};
    data["roomName"] = roomName;
    data["msg"] = inputMessage;
    console.log(data);

    console.log("Sending msg data");
    socket.emit("sendmsg", data);

    document.getElementById("msg-input").value = "";
  }

  render() {
    const { room } = this.props;
    console.log("ROOOOMMSSSS!!!!");
    console.log(room.users);

    const botMsg = [
      {
        nick: "He-man Bot",
        message:
          "With this chatting application we can finally defend Castle Grayskull from the evil forces of Skeletor!",
        timestamp: "JUST NOW"
      }
    ];

    return (
      <div className="not-room-list">
        <div className="chat-text">
          <div>
            <div className="chat-topic">
              <h1>{room.topic}</h1>
            </div>
            <div className="chat-box-parent">
              <div className="chat-box">
                {room.messageHistory.length != 0 && (
                  <Messages messages={room.messageHistory} />
                )}
                {room.messageHistory.length == 0 && (
                  <Messages messages={botMsg} />
                )}
              </div>
            </div>
          </div>
          <div className="text-box">
            <input
              name="inputMessage"
              onInput={e => this.onInput(e)}
              type="text"
              className="msg-input"
              id="msg-input"
              placeholder="message"
            />
            <button
              onClick={this.submitMessage}
              className="send-btn sign-in-btn"
              id="send-btn"
            >
              Send
            </button>
          </div>
        </div>
        <Users userList={room.users} />
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
