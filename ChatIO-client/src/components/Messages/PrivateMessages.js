import React from "react";
import PrivateMsgListView from "../ListView/PrivateMsgListView";

const PrivateMessages = ({ messages }) => {
  return (
    <div>
      <PrivateMsgListView messages={messages} />
    </div>
  );
};

export default PrivateMessages;
