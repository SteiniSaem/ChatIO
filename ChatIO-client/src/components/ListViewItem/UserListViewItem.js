import React from "react";
import { connect } from "react-redux";

class UserListViewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rooms, currentRoom, nickName } = this.props;
    if (rooms[currentRoom].ops[nickName] == undefined) {
      return (
        <li className="user-list-item">
          <span>{nickName}</span>
          <button className="action-btn">Message</button>
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
    nickName: reduxStoreState.user.nickName,
    currentRoom: reduxStoreState.room.currentRoom,
    rooms: reduxStoreState.room.rooms
  };
};

export default connect(mapStateToProps)(UserListViewItem);
