import React from "react";

const MsgListViewItem = props => {
  return (
    <li class="user-list">
      <p className="msg-timestamp">{props.item.timestamp}</p>
      <span className="msg-nick">{props.item.nick}: </span>>
      <span>{props.item.message}</span>
    </li>
  );
};

export default MsgListViewItem;
