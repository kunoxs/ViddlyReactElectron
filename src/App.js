import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Grid from './Grid';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Content />
        <Grid />
      </div>
    );
  }
}

export default App;
