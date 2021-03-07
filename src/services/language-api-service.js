import React, { Component } from "react";
import config from "../config";
import TokenService from "./token-service";

let options = {
  headers: {
    // Authorization: `Bearer ${config.TOKEN_KEY}`,
    Authorization: `Bearer ${TokenService.getAuthToken()}`,
  },
};
const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, options).then((res) =>
      !res.ok
        ? res.json().then((e) => Promise.reject(e))
        : res.json().then((res) => res.language)
    );
  },
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, options).then((res) =>
      !res.ok
        ? res.json().then((e) => Promise.reject(e))
        : res.json().then((res) => res.words)
    );
  },
  getNextWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, options).then((res) =>
      !res.ok
        ? res.json().then((e) => Promise.reject(e))
        : res.json().then((res) => res.nextWord)
    );
  },
};

export default LanguageApiService;
