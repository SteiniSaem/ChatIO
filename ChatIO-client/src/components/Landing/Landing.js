import React from "react";
import { connect } from "react-redux";

class Landing extends React.Component {
  addUser() {
    console.log("siggi sux dix");
  }

  render() {
    return (
      <div className="landing container">
        <div className="landing-title">
          <h1>Enter Your Nickname</h1>
        </div>
        <div className="landing-input">
          <input type="text" className="form-control" placeholder="Username" />
          <button className="sign-in-btn" onClick={this.addUser}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {};
};

export default connect(mapStateToProps)(Landing);
