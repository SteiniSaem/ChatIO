import React from "react";
import UserListViewItem from "../ListViewItem/UserListViewItem";

const UserListView = ({ userList }) => {
  console.log("userListComponent");
  console.log(userList);
  return (
    <ul className="user-list">
      {Object.keys(userList).map(key => (
        <UserListViewItem key={key} nickName={key} user={userList[key]} />
      ))}
    </ul>
  );
};

export default UserListView;
