import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import SocketContext from "../../contexts/SocketContext";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "",
      nickExists: false
    };

    this.addUser = this.addUser.bind(this);
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addUser() {
    const { nickName } = this.state;
    const { addUser } = this.props;
    const { socket } = this.context;

    socket.emit("adduser", nickName, available => {
      if (available) {
        addUser({ nickName });
        this.props.history.push("/chat");
      } else {
        this.setState({ nickExists: true });
      }
    });
  }

  render() {
    const { nickName } = this.props;
    const { nickExists } = this.state;

    return (
      <div className="landing container">
        <div className="landing-title">
          <h1>Enter Your Nickname</h1>
        </div>
        {nickExists && (
          <span className="error">Username already exists or is too long</span>
        )}
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

Landing.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { addUser }
)(Landing);
