import React from "react";
import Rooms from "../Rooms/Rooms";
import Users from "../Users/Users";

const Chat = () => {
  return (
    <div className="chat">
      <Rooms />
      <div className="chat-text">
        <div className="chat-box" />
        <div className="text-box">
          <input type="text" className="msg-input" />
          <button className="send-btn sign-in-btn">Send</button>
        </div>
      </div>
      <Users />
    </div>
  );
};

export default Chat;
