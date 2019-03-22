import React from "react";
import RoomListViewItem from "../ListViewItem/RoomListViewItem";

const RoomListView = ({ roomList }) => {
  return (
    <div className="room-section">
      <h3 className="room-list-header">Rooms</h3>
      <ul className="room-list">
        {Object.keys(roomList).map(key => (
          <RoomListViewItem key={key} roomName={key} room={roomList[key]} />
        ))}
      </ul>
      <div className="create-room-form">
        <input
          type="text"
          placeholder="Room name"
          className="create-room-input"
        />
        <br />
        <input
          type="text"
          placeholder="Room topic"
          className="create-room-input"
        />
        <br />
        <button className="sign-in-btn create-room-btn">Create room</button>
      </div>
    </div>
  );
};

export default RoomListView;
