import React, { Component } from 'react';
import Drum from './Drum/Drum';
import Clock from './Clock/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">JS30 with react</header>
          <p>Drum Kit</p>
		    <Drum/>
        <p>Clock</p>
        <Clock/>
      </div>
    );
  }
}

export default App;
