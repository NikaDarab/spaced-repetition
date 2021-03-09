import React, { Component } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import LanguageApiService from "../../services/language-api-service";
import "./LearningRoute.css";

class LearningRoute extends Component {
  static contextType = LanguageContext;

  handleSubmit = (e) => {
    e.preventDefault();
    let guess = document.getElementById("learn-guess-input").value;

    LanguageApiService.postGuess(guess).then((res) => {
      if (guess == res.answer) {
        alert(`that is correct! the answer is ${res.answer}
        you have answered this word correctly ${this.context.correctCount} times.
        `);
      } else {
        alert(
          `Ooops! that is incorrect! this answer is ${res.answer}, you have answered his word correctly ${this.context.correctCount} times.`
        );
      }
      this.context.setNextWord(res.nextWord);
      this.context.setTotalScore(res.totalScore);
    });
  };
  render() {
    return (
      <section>
        <div className="guess-section">
          <br />
          <div>
            <h2>Translate the word:</h2>
            <span>{this.context.nextWord}</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
              <input
                type="text"
                name="learn-guess-input"
                id="learn-guess-input"
                required
              />
            </label>
            <button className="submit-button" type="submit">
              Submit your answer
            </button>
          </form>
          <p>Your total score is: {this.context.totalScore}</p>

          <p>
            {`You have answered this word correctly ${this.context.correctCount} times.`}
          </p>
          <p>
            {`You have answered this word incorrectly ${this.context.incorrectCount} times.`}
          </p>
        </div>
      </section>
    );
  }
}

export default LearningRoute;
