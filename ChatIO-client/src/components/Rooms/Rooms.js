import React from "react";
import RoomListView from "../ListView/RoomListView";
import { connect } from "react-redux";

class Rooms extends React.component {
  render() {
    return (
      <div>
        <RoomListView list={roomList} />
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    roomList: reduxStoreState.room.rooms
  };
};

export default connect(mapStateToProps)(Rooms);
