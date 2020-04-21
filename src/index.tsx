import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./shared/store";
import Login from "./components/login/Login";

import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => <div>Home</div>

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
