import React from "react";

const PrivateMsgListViewItem = ({ message }) => {
  return (
    <li className="msg">
      <span className="msg-nick">{message.nickName}: </span>
      <span>{message.message}</span>
    </li>
  );
};

export default PrivateMsgListViewItem;
