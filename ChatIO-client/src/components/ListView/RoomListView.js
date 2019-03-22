import React from "react";
import RoomListViewItem from "../ListViewItem/RoomListViewItem";

const RoomListView = ({ roomList }) => {
  return (
    <ul className="room-list">
      {Object.keys(roomList).map(key => (
        <RoomListViewItem key={key} roomName={key} room={roomList[key]} />
      ))}
    </ul>
  );
};

export default RoomListView;
