import React from "react";
import UserListView from "../ListView/UserListView";
import { connect } from "react-redux";

const Users = ({ userList }) => {
  return (
    <div>
      <UserListView userList={userList} />
    </div>
  );
};

export default Users;
