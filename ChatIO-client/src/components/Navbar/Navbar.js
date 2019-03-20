import React from "react";
import { connect } from "react-redux";

const Navbar = ({ nickName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="../../../static/logo.png" className="logo" />
        <span className="lambo-edition">ChatIO (Lamborghini edition)</span>
      </div>
      <span className="navbar-nick">{nickName}</span>
    </nav>
  );
};

const mapStateToProps = reduxStoreState => {
  return {
    // freedom to make this object look like i want
    nickName: reduxStoreState.user.nickName
  };
};
export default connect(mapStateToProps)(Navbar);
