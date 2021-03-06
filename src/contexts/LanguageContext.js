import React, { Component } from "react";
import LanguageApiService from ".././services/language-api-service";
import config from "../config";

export const LanguageContext = React.createContext({
  words: [],
  language: {},
  nextWord: "",
});

export class ContextsProvider extends Component {
  state = {
    words: [],
    language: {},
    nextWord: "",
    error: null,
  };

  componentDidMount() {
    LanguageApiService.getLanguage().then((language) =>
      this.setState({
        language,
      })
    );
    LanguageApiService.getWords().then((words) => {
      this.setState({
        words,
      });
    });
  }

  render() {
    let value = {
      words: this.state.words,
      language: this.state.language,
      nextWord: this.state.nextWord,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
