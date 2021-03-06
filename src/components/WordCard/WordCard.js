import React, { Component } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

class WordCard extends Component {
  static contextType = LanguageContext;
  renderWords = () => {
    if (!this.context.words.length) {
      return <p>Practice words not found</p>;
    }
    return (
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
    );
  };
  render() {
    return <>{this.renderWords()}</>;
  }
}

export default WordCard;
