import React from "react";

const MsgListViewItem = props => {
  console.log("MsgListViewItem shalllooooommmm!!!!");
  console.log(props.listItem);
  return (
    <li className="msg">
      <div className="msg-time">
        {props.listItem.timestamp.getHours().toString()}:
        {props.listItem.timestamp.getMinutes().toString()}{" "}
        {props.listItem.timestamp.getDay().toString()}.
        {props.listItem.timestamp.getMonth().toString()}.
        {props.listItem.timestamp.getFullYear().toString()}
      </div>
      <span className="msg-nick">{props.listItem.nick}: </span>
      <span>{props.listItem.message}</span>
    </li>
  );
};

export default MsgListViewItem;
