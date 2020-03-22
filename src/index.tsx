import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";

ReactDOM.render(
  <Provider>
    <Router>
      <Route path="/" component={Login} />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
