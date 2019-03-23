import React from "react";
import UserListView from "../ListView/UserListView";

const Users = ({ userList }) => {
  return (
    <div>
      <UserListView userList={userList} />
    </div>
  );
};

export default Users;
