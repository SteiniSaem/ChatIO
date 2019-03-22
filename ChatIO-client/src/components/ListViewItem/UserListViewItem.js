import React from "react";

const UserListViewItem = ({ nickName }) => {
  return (
    <li className="user-list-item">
      <span>{nickName}</span>
    </li>
  );
};

export default UserListViewItem;
