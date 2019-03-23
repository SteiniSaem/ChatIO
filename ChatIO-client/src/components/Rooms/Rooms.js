import React from "react";
import RoomListView from "../ListView/RoomListView";

const Rooms = ({ roomList }) => {
  return (
    <div className="room-section">
      <RoomListView roomList={roomList} />
    </div>
  );
};

export default Rooms;
