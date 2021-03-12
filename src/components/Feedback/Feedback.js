import React, { Component } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
class Feedback extends Component {
  static contextType = LanguageContext;
  handleSubmit = () => {
    this.context.setDisplayResult(false);
  };
  render() {
    return (
      <div>
        {this.context.isCorrect ? (
          <h2>You were correct! :D</h2>
        ) : (
          <h2>Good try, but not quite right :(</h2>
        )}
        <div className="DisplayFeedback">
          <p>
            The correct translation for{" "}
            <span en="fr">{this.context.prevWord}</span> was{" "}
            {this.context.answer} and you chose {this.context.guess}!
          </p>
        </div>
        <button className="submit-button" onClick={this.handleSubmit}>
          Try another word!
        </button>
      </div>
    );
  }
}

export default Feedback;
