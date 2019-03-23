import React from "react";
import { connect } from "react-redux";

class UserListViewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rooms, currentRoom, nickName, myNick } = this.props;
    if (rooms[currentRoom].ops[myNick] == undefined) {
      if (rooms[currentRoom].ops[nickName] != undefined) {
        return (
          <li className="user-list-item">
            <span>
              <strong>@{nickName}</strong>
            </span>
            <button className="action-btn">Message</button>
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
            <button className="action-btn">Message</button>
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
