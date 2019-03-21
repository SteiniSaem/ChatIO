import React from "react";
import MsgListViewItem from "../ListViewItem/MsgListViewItem";

const MsgListView = ({ messages }) => {
  return (
    <ul className="msg-list">
      {messages.map((item, index) => (
        <MsgListViewItem key={index} listItem={item} />
      ))}
    </ul>
  );
};

export default MsgListView;
