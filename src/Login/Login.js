import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./Login.css";
import "../Dashboard/Dashboard";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    password: "",
    redirect: false,
  };

  loginHandler(e) {
    console.log("PROPS", this.props, this.state);
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.history.push("/dashboard");
    } else {
      alert("Log IN Failed");
      this.setState({
        username: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div className="loginBlock">
        <h1 className="header">Login</h1>
        <input
          type="text"
          placeholder="Username/Email"
          className="inpFields"
          name={this.state.username}
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
          value={this.state.username}
        />
        <input
          type="password"
          placeholder="Password"
          name={this.state.password}
          className="inpFields"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          value={this.state.password}
        />
        <button className="loginButton" onClick={() => this.loginHandler()}>
          Login
        </button>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;
