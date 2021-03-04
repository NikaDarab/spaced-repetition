import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";

import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <span>{this.context.user.name}</span>
        <li>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </li>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li className="auth-link" style={{ float: "right" }}>
          <Link to="/login">Login</Link>
        </li>

        <li className="auth-link" style={{ float: "right" }}>
          <Link to="/register">Sign up</Link>
        </li>
      </>
    );
  }

  render() {
    return (
      <>
        <header className="header">
          <li className="auth-link">
            <Link to="/">Italingo</Link>
          </li>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </header>
      </>
    );
  }
}

export default Header;
