import React from "react";
import UserListView from "../ListView/UserListView";
import { connect } from "react-redux";

const Users = ({ userList }) => {
  return (
    <div>
      <ul className="user-list">
        <li className="user-list-item">User 1</li>
        <li className="user-list-item">User 2</li>
        <li className="user-list-item">User 3</li>
      </ul>
    </div>
  );
};

export default Users;
