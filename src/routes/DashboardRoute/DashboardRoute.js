import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import LanguageApiService from "../../services/language-api-service";

import Footer from "../../components/Footer/Footer";
import "./DashboardRoute.css";
class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage().then((language) =>
      this.context.setLanguage(language)
    );
    LanguageApiService.getWords().then((res) => {
      this.context.setWords(res);
      this.context.setOriginal(res.original);
      this.context.setTranslation(res.translation);
    });
    LanguageApiService.getNextWord().then((res) => {
      this.context.setNextWord(res.nextWord);
      this.context.setIncorrectCount(res.wordIncorrectCount);
      this.context.setCorrectCount(res.wordCorrectCount);
      this.context.setTotalScore(res.totalScore);
    });
  }
  render() {
    return (
      <div>
        <section>
          <div>
            <div className="scoreboard">
              <div className="language">
                <h2> Language : {this.context.language.name}</h2>
              </div>
              <div className="language">
                <p>
                  Total correct answers: {this.context.language.total_score}
                </p>
              </div>
            </div>
            <Link to="/learn">
              <div className="parent-button">
                <button className="practice-button">Start practicing</button>
              </div>
            </Link>
            <div className="word-cards">
              <h3 className="words">Words to practice</h3>
              <div>
                <ul>
                  {this.context.words.map((word) => {
                    return (
                      <li
                        className="single-word  animate__animated animate__zoomIn"
                        key={word.id}
                      >
                        <h4>{word.original}</h4>
                        <p
                          style={{
                            fontSize: "16.7px",
                            padding: "5px 0",
                          }}
                        >
                          correct answer count: {word.correct_count}
                        </p>
                        <p>incorrect answer count: {word.incorrect_count}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default DashboardRoute;
