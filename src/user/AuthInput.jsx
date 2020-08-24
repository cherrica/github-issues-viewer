import React from "react";
import PropTypes from "prop-types";
import "./authInput.css";

class AuthInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: "" };
  }

  handleChange = (e) => {
    this.setState({ token: e.target.value });
  };

  handleClick = () => {
    this.props.setAuthToken(this.state.token);
  };

  render() {
    return (
      <div className="auth-container">
        <h1>Enter Github API key to continue.</h1>
        <input
          className="token-input"
          type="text"
          value={this.state.token}
          onChange={this.handleChange}
        />
        <button className="token-submit" onClick={this.handleClick}>
          Go
        </button>
      </div>
    );
  }
}

AuthInput.propTypes = {
  setAuthToken: PropTypes.func,
};

export default AuthInput;
