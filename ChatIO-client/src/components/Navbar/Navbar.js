import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ nickName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="../../../static/logo.png" className="logo" />
          <span className="lambo-edition">ChatIO (Lamborghini edition)</span>
        </Link>
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
