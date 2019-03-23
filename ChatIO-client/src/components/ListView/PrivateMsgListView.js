import React from "react";
import PrivateMsgListViewItem from "../ListViewItem/PrivateMsgListViewItem";

const PrivateMsgListView = ({ messages }) => {
  return (
    <ul className="pvt-msg-list">
      {messages.map((item, index) => (
        <PrivateMsgListViewItem key={index} listItem={item} />
      ))}
    </ul>
  );
};

export default PrivateMsgListView;
