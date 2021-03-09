import React, { Component } from "react";
import LanguageApiService from ".././services/language-api-service";

export const LanguageContext = React.createContext({
  words: [],
  language: {},
  nextWord: "",
  guess: "",
  original: "",
  translation: "",
  incorrectCount: null,
  correctCount: null,
  totalScore: null,
});

export class ContextsProvider extends Component {
  state = {
    words: [],
    language: {},
    nextWord: "",
    incorrectCount: null,
    correctCount: null,
    totalScore: null,
    guess: "",
    original: "",
    translation: "",
    error: null,
  };

  componentWillMount() {
    LanguageApiService.getLanguage().then((language) =>
      this.setState({
        language,
      })
    );
    LanguageApiService.getWords().then((res) => {
      this.setState({
        words: res,
        original: res[0].original,
        translation: res[0].translation,
      });
    });
    LanguageApiService.getNextWord().then((res) => {
      console.log(res);
      this.setState({
        nextWord: res.nextWord,
        incorrectCount: res.wordIncorrectCount,
        correctCount: res.wordCorrectCount,
        totalScore: res.totalScore,
      });
    });
  }

  setTotalScore = (totalScore) => {
    this.setState({
      totalScore,
    });
  };
  setCorrectCount = (correctCount) => {
    this.setState({
      correctCount,
    });
  };
  setIncorrectCount = (incorrectCount) => {
    this.setState({
      incorrectCount,
    });
  };
  handleGuessWord = (guess) => {
    console.log(guess);
    this.setState({
      guess,
    });
  };

  setNextWord = (nextWord) => {
    this.setState({
      nextWord,
    });
  };
  render() {
    let value = {
      words: this.state.words,
      language: this.state.language,
      nextWord: this.state.nextWord,
      incorrectCount: this.state.incorrectCount,
      correctCount: this.state.correctCount,
      totalScore: this.state.totalScore,
      guess: this.state.guess,
      original: this.state.original,
      translation: this.state.translation,
      handleGuessWord: this.handleGuessWord,
      setTotalScore: this.setTotalScore,
      setCorrectCount: this.setCorrectCount,
      setIncorrectCount: this.setIncorrectCount,
      setNextWord: this.setNextWord,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
