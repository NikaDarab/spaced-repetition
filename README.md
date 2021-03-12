# Italingo Client

Live app: https://italingo.vercel.app/login

API repo: https://github.com/NikaDarab/spaced-repetition-api

Client repo: https://github.com/NikaDarab/spaced-repetition-client

## Summary

Italingo uses spaced repetition technique to help people memorize words in Italian. The app will display words in the Italian language, and ask you to recall the corresponding word in English.

## Technologies used

React.js and Node.js

## Screenshots

![1](https://user-images.githubusercontent.com/43226446/110991807-b43a6600-833a-11eb-88c7-6ab5692c589b.png)
![2](https://user-images.githubusercontent.com/43226446/110991811-b6042980-833a-11eb-98c6-1c3a52ea71c2.png)
![3](https://user-images.githubusercontent.com/43226446/110991818-b7355680-833a-11eb-9ab5-50bed293bd66.png)
![4](https://user-images.githubusercontent.com/43226446/110991823-b8ff1a00-833a-11eb-9d62-e504dba3a5f1.png)

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application _Cypress.io_ for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
