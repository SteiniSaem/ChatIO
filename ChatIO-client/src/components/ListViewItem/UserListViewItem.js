import React from "react";
import { connect } from "react-redux";
import SocketContext from "../../contexts/SocketContext";

class UserListViewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: "",
      eventSet: false
    };

    this.MsgBtnClicked = this.MsgBtnClicked.bind(this);
    this.onInput = this.onInput.bind(this);
    this.sendPrivateMsg = this.sendPrivateMsg.bind(this);
    this.kickUser = this.kickUser.bind(this);
    this.banUser = this.banUser.bind(this);
  }

  MsgBtnClicked() {
    this.setState({
      visible: !this.state.visible
    });
  }

  sendPrivateMsg() {
    const { message } = this.state;
    const { socket } = this.context;
    const { nickName } = this.props;

    const msgObj = {};
    msgObj["nick"] = nickName;
    msgObj["message"] = message;

    socket.emit("privatemsg", msgObj, valid => {
      if (!valid) {
        console.log("failed sending private message");
      }
    });

    this.setState({ visible: !this.state.visible, eventSet: false });
  }

  kickUser() {
    const { socket } = this.context;
    const { nickName, currentRoom } = this.props;

    const kickObj = {};
    kickObj["user"] = nickName;
    kickObj["room"] = currentRoom;

    socket.emit("kick", kickObj, valid => {
      if (valid) {
        console.log("Kicked " + nickName);
      }
    });
  }

  banUser() {
    const { socket } = this.context;
    const { nickName, currentRoom } = this.props;

    const banObj = {};
    banObj["user"] = nickName;
    banObj["room"] = currentRoom;

    socket.emit("ban", banObj, valid => {
      if (valid) {
        console.log("Banned " + nickName);
      }
    });
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });

    if (!this.state.eventSet) {
      let input = document.getElementById("pvt-msg-input");
      this.setState({ eventSet: true });

      input.addEventListener("keyup", event => {
        if (event.keyCode === 13) {
          document.getElementById("send-pvt-msg-btn").click();
        }
      });
    }
  }

  render() {
    const { visible } = this.state;
    let msgInput;

    if (visible) {
      msgInput = (
        <div className="pvt-msg-form">
          <input
            onInput={e => this.onInput(e)}
            name="message"
            type="text"
            placeholder="Message"
            id="pvt-msg-input"
            className="pvt-msg-input"
          />
          <button
            className="send-pvt-msg-btn"
            id="send-pvt-msg-btn"
            onClick={this.sendPrivateMsg}
          >
            Send
          </button>
        </div>
      );
    }

    const { rooms, currentRoom, nickName, myNick } = this.props;
    if (rooms[currentRoom].ops[myNick] == undefined) {
      if (rooms[currentRoom].ops[nickName] != undefined) {
        return (
          <li className="user-list-item">
            <span className="user-list-item-nick">
              <strong>@{nickName}</strong>
            </span>

            <div class="action-btns">
              <button onClick={this.MsgBtnClicked} className="action-btn">
                Message
              </button>
            </div>
            {msgInput}
          </li>
        );
      } else if (myNick == nickName) {
        return (
          <li className="user-list-item">
            <span className="user-list-item-nick">{nickName}</span>
          </li>
        );
      } else {
        return (
          <li className="user-list-item">
            <span className="user-list-item-nick">{nickName}</span>
            <div className="action-btns">
              <button className="action-btn" onClick={this.MsgBtnClicked}>
                Message
              </button>
            </div>
            {msgInput}
          </li>
        );
      }
    } else if (myNick == nickName) {
      return (
        <li className="user-list-item">
          <span>
            <strong>@{nickName}</strong>
          </span>
        </li>
      );
    } else {
      return (
        <li className="user-list-item">
          <span className="user-list-item-nick">{nickName}</span>
          <div className="action-btns">
            <button className="action-btn">Message</button>
            <button onClick={this.kickUser} className="action-btn">
              Kick
            </button>
            <button onClick={this.banUser} className="action-btn">
              Ban
            </button>
            <button className="action-btn">Make op</button>
          </div>
          {msgInput}
        </li>
      );
    }
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {
    myNick: reduxStoreState.user.nickName,
    currentRoom: reduxStoreState.room.currentRoom,
    rooms: reduxStoreState.room.rooms
  };
};

UserListViewItem.contextType = SocketContext;

export default connect(mapStateToProps)(UserListViewItem);
