import React from "react";
import { connect } from "react-redux";

class UserListViewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.MsgBtnClicked = this.MsgBtnClicked.bind(this);
  }

  componentDidMount() {
    if (this.state.visible) {
      let input = document.getElementById("pvt-msg-input");

      input.addEventListener("keyup", event => {
        if (event.keyCode === 13) {
          document.getElementById("send-pvt-msg-btn").click();
        }
      });
    }
  }

  MsgBtnClicked() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { visible } = this.state;
    let msgInput;

    if (visible) {
      msgInput = (
        <div className="pvt-msg-form">
          <input
            type="text"
            placeholder="Message"
            id="pvt-msg-input"
            className="pvt-msg-input"
          />
          <button id="send-pvt-msg-btn" className="send-pvt-msg-btn">
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
              <button className="action-btn">Message</button>
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
            <button className="action-btn">Kick</button>
            <button className="action-btn">Ban</button>
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

export default connect(mapStateToProps)(UserListViewItem);
