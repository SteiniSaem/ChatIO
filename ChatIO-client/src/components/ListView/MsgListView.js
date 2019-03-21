import React from "react";
import MsgListViewItem from "../ListViewItem/UserListViewItem";

const MsgListView = ({ messages }) => {
  return (
    <ul className="list-view">
      {messages.map(item => (
        <MsgListViewItem listItem={item} />
      ))}
    </ul>
  );
};

export default MsgListView;
