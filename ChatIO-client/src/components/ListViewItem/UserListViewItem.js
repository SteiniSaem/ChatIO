import React from "react";
import { connect } from "react-redux";
import SocketContext from "../../contexts/SocketContext";

class UserListViewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: ""
    };

    this.MsgBtnClicked = this.MsgBtnClicked.bind(this);
    this.onInput = this.onInput.bind(this);
    this.sendPrivateMsg = this.sendPrivateMsg.bind(this);
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
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { visible } = this.state;
    let msgInput;

    if (visible) {
      msgInput = (
        <div>
          <input
            onInput={e => this.onInput(e)}
            name="message"
            type="text"
            placeholder="Message"
            className="pvt-msg-input"
          />
          <button onClick={this.sendPrivateMsg}>Send</button>
        </div>
      );
    }

    const { rooms, currentRoom, nickName, myNick } = this.props;
    if (rooms[currentRoom].ops[myNick] == undefined) {
      if (rooms[currentRoom].ops[nickName] != undefined) {
        return (
          <li className="user-list-item">
            <span>
              <strong>@{nickName}</strong>
            </span>
            <button className="action-btn">Message</button>
            {msgInput}
          </li>
        );
      } else if (myNick == nickName) {
        return (
          <li className="user-list-item">
            <span>{nickName}</span>
          </li>
        );
      } else {
        return (
          <li className="user-list-item">
            <span>{nickName}</span>
            <button className="action-btn" onClick={this.MsgBtnClicked}>
              Message
            </button>
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
          <span>{nickName}</span>
          <button className="action-btn">Message</button>
          <button className="action-btn">Kick</button>
          <button className="action-btn">Ban</button>
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
