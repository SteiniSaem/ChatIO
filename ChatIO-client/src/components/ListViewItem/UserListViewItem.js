import React from "react";

const UserListViewItem = props => {
  return (
    <li class="user-list">
      <p>{props.item}</p>
    </li>
  );
};

export default UserListViewItem;
