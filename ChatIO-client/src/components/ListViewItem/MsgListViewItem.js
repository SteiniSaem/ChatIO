import React from "react";

const MsgListViewItem = ({ listItem }) => {
  let date;

  if (listItem.timestamp != "JUST NOW") {
    const d = new Date(listItem.timestamp);
    date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear();
  } else {
    date = listItem.timestamp;
  }

  return (
    <li className="msg">
      <div className="msg-time">{date}:</div>
      <span className="msg-nick">{listItem.nick}: </span>
      <span>{listItem.message}</span>
    </li>
  );
};

export default MsgListViewItem;
