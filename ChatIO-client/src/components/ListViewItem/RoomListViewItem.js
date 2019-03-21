import React from "react";

const RoomListViewItem = ({ room, roomName }) => {
  console.log("IN ROOM LIST VIEW ITEM");
  console.log(room);
  console.log(roomName);
  return <li className="room-list-item">{roomName}</li>;
};

export default RoomListViewItem;
