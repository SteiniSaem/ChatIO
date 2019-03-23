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
          <input type="text" placeholder="Message" className="pvt-msg-input" />
          <button className="send-pvt-msg-btn">Send</button>
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

export default connect(mapStateToProps)(UserListViewItem);
