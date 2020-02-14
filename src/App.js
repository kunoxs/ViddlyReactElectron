import React, { Component } from 'react';
import './App.css';
import Content from './Components/Content';
import Grid from './Components/Grid';
import AppHeader from './Components/AppHeader';

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
