import "./index.css";
import App from "./App";
import React from "react";
import store from "../src/store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.Strictmode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Strictmode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
