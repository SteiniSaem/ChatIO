import React from "react";
import UserListViewItem from "../ListViewItem/UserListViewItem";

const UserListView = props => {
  return (
    <ul className="list-view">
      {props.list.map(item => (
        <UserListViewItem listItem={item.nickname} />
      ))}
    </ul>
  );
};

export default UserListView;
