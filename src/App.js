import React, { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Logo className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
