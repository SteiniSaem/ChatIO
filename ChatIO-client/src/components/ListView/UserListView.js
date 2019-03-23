import React from "react";
import UserListViewItem from "../ListViewItem/UserListViewItem";

const UserListView = ({ userList }) => {
  return (
    <div className="user-section">
      <h3 className="user-list-header">Users</h3>
      <ul className="user-list">
        {Object.keys(userList).map(key => (
          <UserListViewItem key={key} nickName={key} user={userList[key]} />
        ))}
      </ul>
    </div>
  );
};

export default UserListView;
