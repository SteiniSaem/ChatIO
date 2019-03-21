import React from "react";

const UserListViewItem = props => {
  return (
    <li className="user-list">
      <p>{props.item}</p>
    </li>
  );
};

export default UserListViewItem;
