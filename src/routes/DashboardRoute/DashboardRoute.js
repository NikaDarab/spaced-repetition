import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./DashboardRoute.css";
class DashboardRoute extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <section>
        <div>
          <div className="scoreboard">
            <div className="language">
              <h2> Language : {this.context.language.name}</h2>
            </div>
            <div className="language">
              <p>Total correct answers: {this.context.language.total_score}</p>
            </div>
          </div>
          <Link to="/learn">
            <div className="parent-button">
              <button className="practice-button">Start practicing</button>
            </div>
          </Link>
          <div className="word-cards">
            <h3 className="words">Words to practice</h3>

            <ul>
              {this.context.words.map((word) => {
                return (
                  <li
                    className="single-word  animate__animated animate__zoomIn"
                    key={word.id}
                  >
                    <h4>{word.original}</h4>
                    <p>correct answer count: {word.correct_count}</p>
                    <p>incorrect answer count: {word.incorrect_count}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
