import React from "react";

const MsgListViewItem = props => {
  return (
    <li className="msg">
      <div className="msg-time">{props.listItem.timestamp}:</div>
      <span className="msg-nick">{props.listItem.nick}: </span>
      <span>{props.listItem.message}</span>
    </li>
  );
};

export default MsgListViewItem;
