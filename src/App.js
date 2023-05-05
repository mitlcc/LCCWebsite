import React, { Component } from "react";
import { Router } from "@reach/router";

import History from "./pages/History";
import Home from "./pages/Home";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <History path="/history" />
        </Router>
      </div>
    );
  }
}

export default App;
