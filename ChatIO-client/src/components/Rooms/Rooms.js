import React from "react";
import RoomListView from "../ListView/RoomListView";

const Rooms = ({ roomList }) => {
  return (
    <div>
      <RoomListView roomList={roomList} />
    </div>
  );
};

export default Rooms;
