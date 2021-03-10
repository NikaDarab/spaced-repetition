import config from "../config";
import TokenService from "./token-service";

let options = {
  headers: {
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
        : res.json().then((nextWord) => nextWord)
    );
  },
  postGuess(guess) {
    const body = JSON.stringify({
      guess: guess,
    });

    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: body,
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
    // .catch((e) => console.error(e));
  },
};

export default LanguageApiService;
