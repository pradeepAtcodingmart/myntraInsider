import React, { Component } from 'react';
import './App.css';
import MainModule from './Module/MainModule/MainModule';
import Header from './Module/Component/Header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <MainModule/>
      </div>
    );
  }
}

export default App;
