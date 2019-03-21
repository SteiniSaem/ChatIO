import React from "react";
import { connect } from "react-redux";
import { setCurrentRoom } from "../../actions/roomActions";

class RoomListViewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.room
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { setCurrentRoom, roomName } = this.props;
    const room = {};
    room[roomName] = this.state.room;

    setCurrentRoom(room);
  }

  render() {
    const { roomName } = this.props;
    return (
      <li onClick={this.handleClick} className="room-list-item">
        {roomName}
      </li>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {};
};

export default connect(
  mapStateToProps,
  { setCurrentRoom }
)(RoomListViewItem);
