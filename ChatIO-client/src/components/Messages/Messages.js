import React from "react";
import MsgListView from "../ListView/MsgListView";

const Messages = ({ messages }) => {
  const msg = [
    {
      nick: "Dixie Normus",
      timestamp: new Date(),
      message: "heyyy, this is a message"
    }
  ];
  return (
    <div>
      <MsgListView messages={msg} />
    </div>
  );
};

export default Messages;
