import React from "react";

import { connect } from "react-redux";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing container">
        <div className="landing-title">
          <h1>Enter Your Nickname</h1>
        </div>
        <div className="landing-input">
          <input type="text" className="form-control" placeholder="Username" />
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
