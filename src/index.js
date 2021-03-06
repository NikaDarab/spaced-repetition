import "unfetch/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ContextsProvider } from "./contexts/LanguageContext";
import App from "./components/App/App";
import "./setup-icons";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ContextsProvider>
        <App />
      </ContextsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
