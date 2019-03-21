import React from "react";
import MsgListView from "../ListView/MsgListView";

const Messages = ({ messages }) => {
  return (
    <div>
      <MsgListView messages={messages} />
    </div>
  );
};

export default Messages;
