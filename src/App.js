// Global import of React
import React, { Component } from 'react';
// import css file
import './App.css';
// import NavBar component
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
