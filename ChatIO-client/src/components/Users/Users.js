import React from "react";
import UserListView from "../ListView/UserListView";
import { connect } from "react-redux";

const Users = () => {
  return (
    <div>
      <UserListView list={userList} />
    </div>
  );
};

const mapStateToProps = reduxStoreState => {
  return {
    userList: reduxStoreState.room
  };
};

export default connect(mapStateToProps)(Users);
