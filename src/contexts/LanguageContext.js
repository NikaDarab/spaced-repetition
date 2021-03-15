import React, { Component } from "react";
import LanguageApiService from ".././services/language-api-service";

export const LanguageContext = React.createContext({
  words: [],
  language: {},
  nextWord: "",
  guess: "",
  answer: "",
  original: "",
  translation: "",
  incorrectCount: 0,
  correctCount: 0,
  totalScore: 0,
  displayResult: false,
  isCorrect: null,
  prevWord: null,
});

export class ContextsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      language: {},
      nextWord: "",
      incorrectCount: 0,
      correctCount: 0,
      totalScore: 0,
      guess: "",
      answer: "",
      original: "",
      translation: "",
      error: null,
      displayResult: false,
      isCorrect: null,
      prevWord: null,
    };
  }

  componentWillMount() {
    LanguageApiService.getLanguage().then((language) =>
      this.setState({
        language,
      })
    );
    LanguageApiService.getWords().then((res) => {
      this.setState({
        words: res,
        original: res.original,
        translation: res.translation,
      });
    });
    LanguageApiService.getNextWord().then((res) => {
      this.setState({
        nextWord: res.nextWord,
        incorrectCount: res.wordIncorrectCount,
        correctCount: res.wordCorrectCount,
        totalScore: res.totalScore,
      });
    });
  }

  setLanguage = (language) => {
    this.setState({
      language,
    });
  };

  setWords = (words) => {
    this.setState({
      words,
    });
  };

  setOriginal = (original) => {
    this.setState({
      original,
    });
  };

  setTranslation = (translation) => {
    this.setState({
      translation,
    });
  };
  setTotalScore = (totalScore) => {
    this.setState({
      totalScore,
    });
  };
  setCorrectCount = (correctCount) => {
    this.setState({
      correctCount: correctCount,
    });
  };
  setIncorrectCount = (incorrectCount) => {
    this.setState({
      incorrectCount: incorrectCount,
    });
  };

  setDisplayResult = (bool) => {
    this.setState({
      displayResult: bool,
    });
  };

  setIsCorrect = (isCorrect) => {
    this.setState({
      isCorrect,
    });
  };

  setPrevWord = (prevWord) => {
    this.setState({
      prevWord,
    });
  };
  setNextWord = (nextWord) => {
    this.setState({
      nextWord,
    });
  };
  setGuess = (guess) => {
    this.setState({
      guess,
    });
  };

  setAnswer = (answer) => {
    this.setState({
      answer,
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
      displayResult: this.state.displayResult,
      prevWord: this.state.prevWord,
      answer: this.state.answer,
      handleGuessWord: this.handleGuessWord,
      isCorrect: this.state.isCorrect,
      setTotalScore: this.setTotalScore,
      setCorrectCount: this.setCorrectCount,
      setIncorrectCount: this.setIncorrectCount,
      setNextWord: this.setNextWord,
      setDisplayResult: this.setDisplayResult,
      setIsCorrect: this.setIsCorrect,
      setPrevWord: this.setPrevWord,
      setGuess: this.setGuess,
      setAnswer: this.setAnswer,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      setOriginal: this.setOriginal,
      setTranslation: this.setTranslation,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
