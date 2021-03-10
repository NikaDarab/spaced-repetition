import React, { Component } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import LanguageApiService from "../../services/language-api-service";
import Feedback from "../../components/Feedback/Feedback";
import "./LearningRoute.css";

class LearningRoute extends Component {
  static contextType = LanguageContext;

  handleSubmit = (e) => {
    e.preventDefault();
    let guess = document.getElementById("learn-guess-input").value;
    this.context.setDisplayResult(true);

    LanguageApiService.postGuess(guess)
      .then((res) => {
        this.context.setPrevWord(this.context.nextWord);
        this.context.setTotalScore(res.totalScore);
        this.context.setCorrectCount(res.wordCorrectCount);
        this.context.setIncorrectCount(res.wordIncorrectCount);
        this.context.setNextWord(res.nextWord);
        this.context.setAnswer(res.answer);
        this.context.setGuess(guess);
        this.context.setIsCorrect(res.isCorrect);
        this.context.setDisplayResult(true);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <section>
        <div className="guess-section">
          <br />
          {!this.context.displayResult ? (
            <div>
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
            </div>
          ) : (
            <Feedback />
          )}
          <div className="DisplayScore">
            <p className="correctScore">
              Your total score is: {this.context.totalScore}
            </p>
          </div>

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
