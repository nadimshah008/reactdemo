import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./Register";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginBlock">
        <h1 className="header">Register</h1>
        <input type="text" placeholder="Username/Email" className="inpFields" />
        <input type="password" placeholder="Password" className="inpFields" />
        <button className="loginButton">Register</button>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default Register;
