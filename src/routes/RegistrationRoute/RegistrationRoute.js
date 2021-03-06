import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationRoute.css";
class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section>
        <h2 className="description animate__animated animate__pulse">
          Practice learning a language with the spaced reptition revision
          technique.
        </h2>
        <h2 style={{ display: "none" }}>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute;
