// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/index";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
  <ThemeProvider theme={Theme}>
  <App />
  </ThemeProvider>, 
  document.getElementById("root")
);

