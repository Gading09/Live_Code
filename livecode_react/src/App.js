import React, { Component } from 'react';
import './App.css';
import './style/css-final.css';
import "./style/bootstrap.min.css";
import MainRoute from "./routes/mainRoutes"

class App extends Component {
  render() {
    return (
      <div>
          <MainRoute/>
      </div>
    );
  }
}

export default App;
