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
  componentDidMount() {
    let input = document.getElementById("nick-input");

    input.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        document.getElementById("sign-in-btn").click();
      }
    });
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
            id="nick-input"
            className="form-control"
            placeholder="Username"
            value={nickName}
          />
          <button
            className="sign-in-btn"
            id="sign-in-btn"
            onClick={this.addUser}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {};
};

Landing.contextType = SocketContext;

export default connect(
  mapStateToProps,
  { addUser }
)(Landing);
