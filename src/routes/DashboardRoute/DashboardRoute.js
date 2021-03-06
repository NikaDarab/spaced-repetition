import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <section>
        <div>
          <div>
            <h2>{this.context.language.name}</h2>
          </div>
          <p>Total correct answers: {this.context.language.total_score}</p>
          <Link to="/learn">
            <button>Start practicing</button>
          </Link>
          <h3>Words to practice</h3>

          <ul>
            {this.context.words.map((word) => {
              return (
                <li key={word.id}>
                  <h4>{word.original}</h4>
                  <p>correct answer count: {word.correct_count}</p>
                  <p>incorrect answer count: {word.incorrect_count}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
