import React from "react";

import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginBlock">
        <h1 className="header">Login</h1>
        <input type="text" placeholder="Username/Email" className="inpFields" />
        <input type="password" placeholder="Password" className="inpFields" />
        <button className="loginButton">Login</button>
      </div>
    );
  }
}

export default Login;
