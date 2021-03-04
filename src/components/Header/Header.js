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
        <nav>
          <li>
            <Link onClick={this.handleLogoutClick} to="/login">
              Logout
            </Link>
          </li>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <>
        <nav>
          <li className="auth-link">
            <Link to="/login">Login</Link>
          </li>{" "}
          <li className="auth-link">
            <Link to="/register">Sign up</Link>
          </li>
        </nav>
      </>
    );
  }

  render() {
    return (
      <>
        <header className="header">
          <h1>
            <li>
              <Link to="/">Italingo</Link>
            </li>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </header>
      </>
    );
  }
}

export default Header;
