import React from "react";
import RoomListViewItem from "../ListViewItem/RoomListViewItem";

const RoomListView = props => {
  return (
    <ul className="list-view">
      {props.list.map(item => (
        <RoomListViewItem listItem={item.topic} />
      ))}
    </ul>
  );
};

export default RoomListView;
