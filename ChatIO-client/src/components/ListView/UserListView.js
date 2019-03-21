import React from "react";
import UserListViewItem from "../ListViewItem/UserListViewItem";

const UserListView = ({ list }) => {
  return (
    <ul className="list-view">
      {list.map(item => (
        <UserListViewItem listItem={item.nickname} />
      ))}
    </ul>
  );
};

export default UserListView;
