import React from "react";

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
      </div>
    );
  }
}

export default Register;
