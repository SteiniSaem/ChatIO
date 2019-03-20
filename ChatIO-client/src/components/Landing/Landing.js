import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: ""
    };

    this.addUser = this.addUser.bind(this);
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addUser() {
    const { nickName } = this.state;
    const { addUser } = this.props;

    addUser({ nickName });
  }

  render() {
    const { nickName } = this.props;

    return (
      <div className="landing container">
        <div className="landing-title">
          <h1>Enter Your Nickname</h1>
        </div>
        <div className="landing-input">
          <input
            type="text"
            name="nickName"
            onInput={e => this.onInput(e)}
            className="form-control"
            placeholder="Username"
            value={nickName}
          />
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

export default connect(
  mapStateToProps,
  { addUser }
)(Landing);
